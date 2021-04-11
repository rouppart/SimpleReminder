import App from './App.svelte';

const app = new App({
	target: document.body
});

export default app;

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js')
		.then(function() {
			console.log('Service Worker Registered');
		});
}