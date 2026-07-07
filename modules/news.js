const news = {
	
	data: {
		1592: `James VI recognises the power of presbyterianism with his 'Golden Act'`,
		1614: `Edinburgh mathematician John Napier invents logarithms`,
		1625: `Charles I of England, Scotland and Ireland begins his tumultuous reign`,
		1648: `the second English Civil War ends with the execution of Charles I — Scotland is thrown into turmoil`,
		1692: `the Massacre of 30 'disloyal' noblemen at Glencoe puts the fear of God into many a Scottish laird` ,
		1695: `the Bank of Scotland is established by an Act of Parliament`,
		1746: `the Battle of Culloden in 1746 puts a decisive end to the Jacobite risings`,
		1783: `the Glasgow Herald newspaper publishes its first edition`,
		1817: `the Scotsman newspaper publishes its first edition`,
		1846: `the Highland Potato Famine ravages rural communities`,
		1860: `Edinburgh polymath James Clerk Maxwell publishes the first of his revolutionary equations unifying of electricity and magnetism`,
		1603: `the Union of the Crown turns James VI of Scotland into James I of England`,
		1642: `the first English Civil War begins and end, bringing strife and uncertainty to Scotland`,
		1679: `James, Duke of Monmouth, finally defeats the Covenanters at the Battle of Bothwell Brig`,
		1689: `in the first Jacobite Rising, Highlanders defeat the army of William III, but are stopped at the Battle of Dunkeld`,
		1769: `James Watt patents his condensing chamber, greatly improving the efficiency of the steam engine and ushering in the Industrial Revolution`,
		1879: `the Tay Bridge disaster claims at least 59 lives, but eleven years later there's better news when the Forth Rail Bridge is completed`,
		1561: `Mary, Queen of Scots returns from France aged eighteen`,
		1566: `King James VI is baptised at Stirling`,
		1639: `The First Bishops' War ends with a short-lived treaty`,
		1640: `Scots invade and occupy parts of northern England in the Second Bishops' War after their success at the Battle of Newburn`,
		1651: `many Scottish royalists perish in the Battle of Worcester at the hands of the New Model Army`,
		1698: `Scotland's attempt to create a 'New Caledonia' in the inhospitable Darien Gap between North and South America fails nobly`,
		1707: `the Acts of Union merge Scotland and England into a United Kingdom`,
		1748: `Scottish philosopher David Hume publishes his Philosophical Essays Concerning Human Understanding, introducing the world to his unique introspective methods`,
		1776: `Adam Smith publishes The Wealth of Nations, effectively creating the field of economics, in the same year the United States declares independence from Great Britain`,
		1878: `the collapse of the City of Glasgow Bank sends shockwaves through the merchant classes. Eighteen years later, the opening of the Glasgow Subway heralds the arrival of urban mass transit in Scotland`
	},

	request: function(decade) {
		const candidates = [];
		for(var i in this.data) {
			if(i >= decade && i < decade + 10) {
				candidates.push([i, this.data[i] ]);
			}
		}

		if(candidates.length) {
			return candidates[ Math.floor(Math.random() * candidates.length) ];
		}
		return false;
	}
}

export { news };