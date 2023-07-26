const Posts = require('../models/postModel');

const postmanagementCtrl = {
  getReportedPosts: async (req, res) => {
    try {
      const reportedPosts = await Posts.find({ reports: { $exists: true, $not: { $size: 0 } } });

      res.json(reportedPosts);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  blockPost: async (req, res) => {
    try {
      await Posts.findOneAndUpdate(
        { _id: req.params.id },
        { blocked: true }
      );

      res.json({ msg: 'Post blocked' });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  unblockPost: async (req, res) => {
    try {
      await Posts.findOneAndUpdate(
        { _id: req.params.id },
        { blocked: false }
      );

      res.json({ msg: 'Post unblocked' });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = postmanagementCtrl;
