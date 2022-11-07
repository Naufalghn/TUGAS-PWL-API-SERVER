import express from "express";
import {addList,getList, getListID} from '../Crud/crud.js';

const router = express.Router();

router.get('/team',getList);
router.get('/team/:id',getListID);
router.post('/team',addList);





export default router;