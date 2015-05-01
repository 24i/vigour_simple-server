var options = module.exports = require('commander')
  .option( '-p, --port <Number>'
    , 'port to listen for incoming requests [54321]'
    , toInt
    , 54321
    )

function toInt(opt){
  return parseInt(opt)
}