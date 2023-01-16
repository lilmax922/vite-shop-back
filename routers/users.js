import { Router } from 'express'
import content from '../middleware/content.js'
import * as auth from '../middleware/auth.js'
import { register, login, logout, extend, getUser, editCart, getCart } from '../controllers/users.js'

const router = Router()

router.post('/', content('application/json'), register) // 註冊
router.post('/login', content('application/json'), auth.login, login) // 登入
router.delete('/logout', auth.jwt, logout) // 登出
router.patch('/extend', auth.jwt, extend) // 舊換新
router.get('/me', auth.jwt, getUser) // 取自己的資料
router.post('/cart', content('application/json'), auth.jwt, editCart) // 購物車設定
router.get('/cart', auth.jwt, getCart)

export default router
