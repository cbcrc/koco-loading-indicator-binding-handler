define(['knockout', 'jquery'], function(ko, $) {
    'use strict';

    ko.bindingHandlers.loadingIndicator = {
        update: function(element, valueAccessor /*, allBindings, viewModel, bindingContext */) {
            var loading = ko.unwrap(valueAccessor());
            var $element = $(element);

            if (loading === true) {
                $element.addClass('loading-indicator');
            } else if (loading === false) {
                $element.removeClass('loading-indicator');
            } else if (loading.done) {
                $element.addClass('loading-indicator');
                loading.done(function () {
                    $element.removeClass('loading-indicator');
                });
            }
        }
    };
});