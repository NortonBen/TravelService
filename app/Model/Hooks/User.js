
const Hash = use('Hash')

function HookSave(schema) {
    schema.pre('save', function * (next){
        this.password  = yield Hash.make(this.password)
        yield next
    })
}

module.exports = { HookSave }