import { response } from "express";
import List from "../struktur/table.js";

export const getList = async(req, res) =>{
    try{
        const response =await List.findAll();
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const getListID = async(req, res) =>{
    try{
        const response =await List.findOne({ where:{ id: req.params.id }});
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const addList = async(req, res) =>{
    try{
        await List.create(req.body);
        res.status(201).json({msg:"Data Berhasil Ditambahkan!"})
    }catch(error){
        console.log(error.message);
    }
}



