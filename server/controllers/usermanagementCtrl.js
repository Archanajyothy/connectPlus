const Users = require('../models/userModel');

const usermanagementCtrl = {
  getUsers: async (req, res) => {
    try {
      const users = await Users.find();

      res.json(users);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  blockUser: async (req, res) => {
    try {
      console.log("vanno ", req)
      await Users.findOneAndUpdate(
        { _id: req.params.id },
        { blocked: true }
      );

      res.json({ msg: 'User blocked' });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  unblockUser: async (req, res) => {
    try {
      await Users.findOneAndUpdate(
        { _id: req.params.id },
        { blocked: false }
      );

      res.json({ msg: 'User unblocked' });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = usermanagementCtrl;
