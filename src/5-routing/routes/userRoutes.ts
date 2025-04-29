// Add
// Fetch
// Update
// Delete

// /api/users/add
// /api/users/fetch
// /api/users/update    
// /api/users/delete

import {Router, Request, Response} from 'express';
import {getUser, addUser, updateUser, deleteUser, loginUser} from '../controller/userController';
const router: Router = Router()

router.get('/users/fetch', getUser)
router.post('/users/add', addUser)
router.post('/users/login', loginUser)
router.put('/users/update', updateUser)
router.delete('/users/delete', deleteUser)

export default router   