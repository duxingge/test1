/**
 * 
 */
var wjx = {
		getContext : function() {
			var returnStr;
			var path = location.pathname.substring(1);
			var index = path.indexOf("/");
			if(index==-1) {
				returnStr = path;
			}else {
				returnStr = path.substring(0,index);
			}
			return returnStr;
		}
}
