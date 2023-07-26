const router = require('express').Router();
const usermanagementCtrl = require('../controllers/usermanagementCtrl');
const postmanagementCtrl = require('../controllers/postmanagementCtrl');
const auth = require('../middleware/auth');

router.route('/users')
.get(auth, usermanagementCtrl.getUsers);

router.put('/users/:id/block', auth, usermanagementCtrl.blockUser);
router.put('/users/:id/unblock', auth, usermanagementCtrl.unblockUser);

router.get('/reportedPosts', auth, postmanagementCtrl.getReportedPosts);
router.put('/blockPost/:id', auth, postmanagementCtrl.blockPost);
router.put('/unblockPost/:id', auth, postmanagementCtrl.unblockPost);

module.exports = router;
