import Convert from "./functions/Convert.js"
import PmToAm from "./functions/PmToAm.js"

// função exportada
export default class HoursConvert {
    constructor() {}

    // Convert minutes to hours and hours to minutes
    static convert = (...values) => {
        const convert = new Convert()
        return convert.run(values)
    }

    // Convert hour format PM to AM
    static pmToAm = (...values) => {
        const ampm = new PmToAm()
        return ampm.run(values)
    }
}
