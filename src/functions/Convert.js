import EmptyError from "../error/Empty.js"

// limitado a '23:59' horas ou 1439 minutos
export default class Convert {

    #input
    #exit = []

    constructor() {}

    #hoursToMinute = i => {
        if(typeof(i) === 'string') {
            if(i.indexOf(':') === 2) {
                const time = i.split(':')
                if(time.length > 2 || time.length < 0) throw new TypeError('Atributo em formato inválido!')
                const hora = Number(time[0])
                const minute = Number(time[1])
                if(!isNaN(hora) && !isNaN(minute)) {
                    if(this.#verifyTime(hora, minute)) return (hora * 60) + minute
                    else throw new RangeError('values outside the limits!')
                } else throw new TypeError('attribute entered in invalid format!')
            } else throw new TypeError('the format to be informed must be "23:59"PM!')
        } else throw new TypeError('attribute entered in invalid format!')
    }

    #minutesToHours = i => {
        if(i < 0 || i > 1439) throw new RangeError('value above permitted!')
        const integer = num => Number.isInteger(num)
        const ternary = num => num < 10 ? `0${num}`:`${num}`
        let amount = 0
        let split = i / 60
        let result
        if(integer(split)) return `${ternary(split)}:00`
        else {
            do {
                amount++
                i--
                result = i / 60
            } while(!integer(result))
            return `${ternary(result)}:${ternary(amount)}`
        }
    }

    #verifyTime = (hour, min) => {
        if(hour > 24  || hour < 0) return false
        else {
            if(min > 59 || min < 0) return false
            else return true
        }
    }

    run = (hours) => {
        if(hours.length === 0) throw new EmptyError('Função construtora deve receber um valor!')
        this.#input = hours
        this.#input.map(i => {
            if(typeof(i) === 'string') this.#exit.push(this.#hoursToMinute(i))
            else if(typeof(i) === 'number') this.#exit.push(this.#minutesToHours(i))
            else throw new TypeError('Atributo passado em formato inválido')
        })
        return this.#exit
    }
}