String.prototype.palim = function () 
{
	return this.replace(/ /g, '') == this.replace(/ /g, '').split('').reverse().join('')
		? true
		: false	
}