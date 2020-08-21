import $ from 'jquery';
import './app2.css';

const $tabBar = $('#tab-bar li');

$tabBar.on('click', (e) => {
	const $li = $(e.currentTarget);
	$li.addClass('active')
		.siblings()
		.removeClass('active');
	const $content = $('#tab-content li');
	const index = $li.index();
	$content.eq(index)
		.addClass('active')
		.siblings()
		.removeClass('active');
});

$tabBar.eq(0).trigger('click');
