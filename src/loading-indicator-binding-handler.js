// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

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