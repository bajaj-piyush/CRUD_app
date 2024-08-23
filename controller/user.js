const User = require("../models/user");

async function users(req,res){
    
        const dbUsers = await User.find({});
        res.setHeader("x-name" , "header1");
        return res.json(dbUsers);
};

async function UserById(req,res){
const user = await User.findById(req.params.id);
   
    if(!user) return res.status(404).json({msg:"No user with id found!"});
    
        return res.json(user);
    
};

async function updateUserById(req,res){
const value = req.body;
    const user = await User.findByIdAndUpdate(req.params.id,value);
    if(!user) return res.status(404).json({msg:"No user with id found!"});
    const updatedUser = await User.findById(req.params.id);
    return res.json(updatedUser);

};

async function deleteUSerById(req,res){
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user) return res.status(404).json({msg:"No user with id found!"});
    return res.json({Status:"User Deleted Successfully", user});
};

async function postUser(req,res){
    const body = (req.body);
    if(!body || !body.first_name || !body.last_name || !body.gender || !body.job_title || !body.email){
        return res.status(400).json({msg:"All fields are required."});
    }

    const result = await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title
    });
    
    return res.status(201).json(result);
};

async function htmlUser(req,res){
    const dbUser = await User.find({});
       const html = `
       <ul>
        ${dbUser.map((user) => `<li>${user.firstName +" "+ (user.lastName?user.lastName:"")} - ${user.email}</li>`).join(" ")}
       </ul>
       `;
       res.send(html);
};

module.exports = {
    users,
    UserById,
    deleteUSerById,
    postUser,
    updateUserById,
    htmlUser,

}