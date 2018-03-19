import getNumberRange from '../../../assets/javascript/utilities';
import moment from '../../../assets/javascript/moment';
import api from '../../../assets/javascript/api'

let allSports =  api.getAllSports()
let currentYear = moment().year()

const dropDownOptions = {
  Months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  Years: getNumberRange(currentYear, (currentYear + 20), []),
  States: api.getAllStates()
    .then((states) => {
      return Object.values(states.data)
    }),
  Sports: api.getAllSports()
    .then((sports) => {
      return Object.values(sports.data) 
    }),
  ProgramType: api.getAllProgramTypes()
    .then((programs) => {
      console.log('programs (╯°□°)╯︵ ┻━┻ ', programs)
    }),
  Affiliation: ['US Club Soccer', 'NHL', 'NFL'],
  
  // api.getAllAffiliations().then((affiliations) => {
  //   console.log('affiliations (╯°□°)╯︵ ┻━┻ ', affiliations)
  // }),
}


export default dropDownOptions;