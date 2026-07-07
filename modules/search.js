export default {

    init: function(sourceEl, targetEl, callback, apiRoot) {

        const _this = this;
        this.sourceEl = sourceEl;
        this.targetEl = targetEl;
        this.callback = callback;
        this.apiRoot = apiRoot;
        this.template = `<div data-surname="{SURNAME}" data-id="{ID}" data-num_records="{NUM_RECORDS}" class="searchResult">{SURNAME}</div>`;

        sourceEl.on('keydown change', function(){
            const val = $(this).val().toUpperCase();
            if(val.length >= 2) {
                const url = _this.apiRoot + '/?auth=s$fsqi-928&command=search&surname=' + val + '&exact=0';
                console.log(url);
                $.get(url, function(data){
                    data = JSON.parse(data);
                    data = data.surnames;
                    let html = '';
                    console.log(data);
                    for(var i in data) {
                        let o = _this.template;
                        o = o.replaceAll('{SURNAME}', data[i].name);
                        o = o.replaceAll('{ID}', data[i].id);
                        o = o.replaceAll('{NUM_RECORDS}', data[i].num_records);
                        html += o;
                    }
                    _this.targetEl.html(html);
                });
            }
            
        });

        $(document).on('click', '.searchResult', function(){
            callback($(this).attr('data-surname'), $(this).attr('data-id'), $(this).attr('data-num_records'));
        });

    },

    clear: function() {
        $('#searchResults').html('');
        $('#searchName').val('')
    }

}