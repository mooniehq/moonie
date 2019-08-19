const { appConfig: { baseDomain } } = require('../config/config')

const lookUpCommunity = ({ host }, res, next) => {
  const domainIndex = host.indexOf(baseDomain)
  let subDomain
  if (domainIndex > 0) {
    subDomain = host.substring(0, domainIndex - 1)
  }
  console.log(subDomain)
  next()
}

module.exports = { lookUpCommunity }
