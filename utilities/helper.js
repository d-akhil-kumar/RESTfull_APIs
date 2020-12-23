exports.generateId = async (model, prefix) => {

    const count = await model.countDocuments()
    return prefix + count

}