define(function(require) {
    function ClockProvider(Private) {
        var TemplateVisType = Private(require('ui/template_vis_type/TemplateVisType'));
        return new TemplateVisType({
            name: 'gostroyClock', // the internal id of the visualization
            title: 'Clock', // the name shown in the visualize list
            icon: 'fa-clock-o', // the class of the font awesome icon for this
            description: 'Add a digital clock to your dashboards.', // description shown to the user
            requiresSearch: false, // Cannot be linked to a search
            template: require('plugins/gostroy_k_46_p_exm_timroes/clock.html') // Load the template of the visualization
        });
    }

    require('ui/registry/vis_types').register(ClockProvider);

    return ClockProvider;
});