const dbClient = require('../models/dbClient');

const emailController = {
  subscribeEmail: async (request, response) => {
    const { email } = request.body;
    if (!email) return response.json({ ok: 0, errorMessage: 'Email value required.' });
    try {
      const data = await dbClient.db('test').collection('emails')
        .updateOne({ email }, { $set: { email } }, { upsert: true });
      response.json(data.result);
      return console.log('Data Sent');
    } catch (error) {
      response.json({ ok: 0, errorMessage: 'Error' });
      return console.log(error);
    }
  },
};

module.exports = emailController;
