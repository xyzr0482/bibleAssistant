Template.dedication.events({
	'click button': function () {
		Router.go('menu');

	},
    'click [data-action=share]': function (event, template) {
        // _self: Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
        // _blank: Opens in the InAppBrowser.
        // _system: 使用设备系统浏览器
        var ref = window.open('http://donate.elijah.cn/biblehelper/share.html', '_system', 'location=yes');
    },

    'click [data-action=donate]': function (event, template) {
        // _self: Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
        // _blank: Opens in the InAppBrowser.
        // _system: 使用设备系统浏览器
        var ref = window.open('http://donate.elijah.cn/biblehelper/biblehelper.html', '_system', 'location=yes');
    }


});
Template.dedication.helpers({
    bookName: function () {
        return Session.get('currentBookName');
    },
    chapterSN: function () {
        return Session.get('currentChapter');
    },
    position: function(){
        return Session.get('timeValue');
    },
    section: function(){
        var position = Session.get('timeValue');
        var sectionSN = getCurrSection(position);
        return sectionSN;
    },
    dur:function(){
        return Session.get('dur');
    }
});