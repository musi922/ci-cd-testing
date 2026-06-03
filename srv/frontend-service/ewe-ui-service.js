const cds = require('@sap/cds')

module.exports = class EweUiService extends cds.ApplicationService {
  async init() {

    this.before('CREATE', 'Units', (req) => {
      if (!req.data.unitCode) {
        req.reject(400, 'ERROR_UNITCODE_IS_REQUIRED')
      }
    })

    return super.init()
  }
}