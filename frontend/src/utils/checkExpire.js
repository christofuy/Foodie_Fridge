function getWeekend() {
	var curr = new Date;
	var first = curr.getDate() - curr.getDay();
	var last = first + 6;

	var firstday = new Date(curr.setDate(first)).toUTCString();
	var lastday = new Date(curr.setDate(last)).toUTCString();
	return [firstday, lastday];
}

function getWeekday(day) {
	const intDay = day.getDay();
	if (intDay === 0) return "Sunday";
	if (intDay === 1) return "Monday";
	if (intDay === 2) return "Tuesday";
	if (intDay === 3) return "Wednesday";
	if (intDay === 4) return "Thursday";
	if (intDay === 5) return "Friday";
	if (intDay === 6) return "Saturday";
}


function weeklyExpire(foodList) {
	const weekly_dict = {
		"Sunday": [],
		"Monday": [],
		"Tuesday": [],
		"Wednesday": [],
		"Thursday": [],
		"Friday": [],
		"Saturday": []
	}

	var weekend_list = getWeekend();
	var sunday = weekend_list[0];
	var saturday = weekend_list[1];

	for (var i = 0; i < foodList.length; i++) {
		var temp_expiration = new Date(foodList[i]["expiry"]);
		var temp_expiration_date = temp_expiration.toString();
		if (new Date(temp_expiration_date) >= new Date(sunday) && new Date(temp_expiration_date) <= new Date(saturday)) {
			var temp_current_day = getWeekday(temp_expiration);
			weekly_dict[temp_current_day].push(foodList[i]["item"]);
		}
	}
	return weekly_dict;
}


export default weeklyExpire
