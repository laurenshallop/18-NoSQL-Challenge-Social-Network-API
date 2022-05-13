const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    addFriend,
    deleteUser,
    deleteFriend
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/user 
router 
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/user/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router 
    .route('/:id/friends/:friendId')
    .put(addFriend)
    .delete(deleteFriend)

module.exports = router;