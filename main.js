chrome.app.runtime.onLaunched.addListener(function(intentData) {
    chrome.app.window.create('index.html', {
    	id: "example",
        innerBounds: {
            width: 300,
            height: 200
        }
    });
});
