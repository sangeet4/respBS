import $ from 'jquery';
import 'bootstrap';
import './scss/index.scss';

// for popovers
$(document).ready(function() {
    $('[data-toggle="popover"]').popover()
});

