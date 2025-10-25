const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
		},
	},
	{
		timestamps: true,
	}
);

// schema.pre('save', )

// 123456
// user -> password => dsakldsakdjsalkdjaskldjaskl

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		return next();
	}

	this.password = await bcrypt.hash(this.password, 10);

	next();
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
