// Require the necessary discord.js classes
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { token } = require('./config.json');
const prefix= "$";
//to look into other js files
const fs=require('fs');

// //to create a new collection of commands
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});
client.on('message',message=>{
    if(!message.content.startsWith(prefix) ||message.author.bot)return;
    const args=message.content.slice(prefix.length).split(/ +/);
    const command=args.shift().toLowerCase()

    if(command==='ping'){
    client.commands.get('ping').execute(message,args)
    }
    else if(command==='ec2'){
        message.channel.send("Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale ...")
    }
    else if(command==='s3'){
        message.channel.send("Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security")
    }
    else if(command==='lambda'){
        message.channel.send("AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers, creating workload-aware cluster scaling logic")
    }
    else if(command==='loadbalancer'){
        message.channel.send("Elastic Load Balancing offers the ability to load balance across AWS and on-premises resources, using a single load balancer. You can achieve this by registering all of your resources to the same target group and associating the target group with a load balancer.")
    }
    else if(command==='vpc'){
        message.channel.send("Amazon Virtual Private Cloud (VPC) is a service that lets you launch AWS resources in a logically isolated virtual network that you define.")
    }
    else if(command==='ebs'){
        message.channel.send("Amazon Elastic Block Store (EBS) is an easy-to-use, scalable, high-performance block-storage service designed for Amazon Elastic Compute Cloud (EC2).")
    }
    else if(command==='eks'){
        message.channel.send("Amazon Elastic Kubernetes Service (Amazon EKS) gives you the flexibility to start, run, and scale Kubernetes applications in the AWS Cloud or on-premises")
    }
    else if(command==='rds'){
        message.channel.send("Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud.")
    }
})


// Login to Discord with your client's token
client.login(token);
