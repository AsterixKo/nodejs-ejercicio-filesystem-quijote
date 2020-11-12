const processBookModule = require('./lib/processBook');
const saveResultModule = require('./lib/saveResult');

saveResultModule.saveResult(processBookModule.countSancho());