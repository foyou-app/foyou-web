export const API_URL = 'http://localhost:1212/';
//export const API_URL = 'https://apis.foyou.app/';
export const timeZoneStr = 'Canada/Central';
export const formatDateMDY =(date)=> {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [month,day,year].join('-');
}
export class ConfigDB {
	static data = {
		settings: {
			layout_type: 'ltr',
			sidebar: {
				wrapper: 'default',
				bodyWrapper: 'default'
			},
			sidebar_setting: 'default-sidebar',
			sidebar_backround: 'dark-sidebar'
		},
		color: {
			layout_version: 'light',
			color: 'color-1',
			primary_color: '#4466f2',
			secondary_color: '#1ea6ec',
			mix_layout: 'default'
		},
		router_animation: 'fadeIn'
	}
}
 