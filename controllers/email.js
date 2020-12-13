const dbClient = require('../models/dbClient')

const emailController = {
  subscribeEmail: async (request, response) => {
    const { email } = request.body
    if (!email) return response.json({ok:0, errorMessage: "Email value required."})
    try {
      const data = await dbClient.db("test").collection("emails")
        .updateOne({"email": email }, {$set: {"email": email}}, {upsert:true})
      response.json(data.result)
      console.log("Data Sent")
    } catch (error) {
      response.json({ok: 0, errorMessage: "Error"})
      console.log(error)
    }
  }
}

module.exports = emailController
