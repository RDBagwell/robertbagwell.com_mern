const { STRING, INTEGER, TEXT } = require('sequelize');
const { sequelize } = require('../../services/mysql_config')

const Posts = sequelize.define('post',{
  userId:{
    type: INTEGER,
    allowNull: false
  },
  title:{
    type: STRING,
    allowNull: false
  },
  body:{
    type: TEXT,
    allowNull: false               
  }
});

const Pages = sequelize.define('page',{
  title:{
    type: STRING,
    allowNull: false
    
  },
  description:{
    type: TEXT,
    allowNull: false
    
  },
  path:{
    type: STRING,
    allowNull: false
  },
  imageURL:{
    type: STRING,
    defaultValue: "https://placehold.co/300?text=No%20Image"
  }
});

const User = sequelize.define('user',{
  firstName:{
    type: STRING,
    allowNull: false
    
  },
  lastName:{
    type: STRING,
    allowNull: false
  },
  usename:{
    type: STRING,
    allowNull: false
  },
  email:{
    type: STRING,
    allowNull: false
  },
  password:{
    type: STRING,
    allowNull: false
  }
});

module.exports = {
  Posts,
  Pages,
  User
}