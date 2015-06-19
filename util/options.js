var options = module.exports = require('commander')
  .option( '-h, --http <Number>',
    'port to listen for incoming requests over http [80]',
    toInt, 
    80
    )
  .option( '-s, --ssl <Number>',
    'port to listen for incoming requests over https [443]',
    toInt,
    443
    )
  .parse(process.argv).opts()

function toInt(opt){
  return parseInt(opt)
}