export default class PmToAm {

    #input
    #exit = []

    constructor() {}

    #verifyHour = (hour, min) => {
        if(hour > 24  || hour < 0) return false
        else if(min > 59 || min < 0) return false
        else return true
    }

    #ternary = num => num < 10 ? `0${num}`:`${num}`

    #convert = value => {
        if(value.indexOf(':') === 2) {
            const time = value.split(':')
            if(time.length > 2 || time.length < 0) throw new TypeError('Atributo passado em formato inválido')
            const hora = Number(time[0])
            const minute = Number(time[1])
            if(!isNaN(hora) && !isNaN(minute)) {

                if(this.#verifyHour(hora, minute)) {

                    if(hora > 12 && hora < 24) return `${this.#ternary(hora - 12)}:${this.#ternary(minute)} PM`
                    else return `${this.#ternary(hora)}:${this.#ternary(minute)} AM`

                    // const newHour = hora - 12
                    // if(newHour < 10) return `0${newHour}:${minute}`
                    // else return `${newHour}:${minute}`
                } else throw new RangeError('values outside the limits!')

            } else throw new TypeError('attribute entered in invalid format!')
        } else throw new TypeError('the format to be informed must be "23:59"PM!')
    }

    run = (values) => {
        this.#input = values
        this.#input.map(i => {
            if(typeof(i) !== 'string') throw new TypeError('attribute entered in invalid format!')
            this.#exit.push(this.#convert(i))
        })
        return this.#exit
    }
}