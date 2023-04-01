/**/ typeof vi.publisherConfig === 'function' && vi.publisherConfig({ 
  tagConfig: {
	IAB_Category: 'IAB3, IAB12',
	Language: 'de-de',
	TextAbove: 'Anzeige',
     CustomViCSS: ' #vi-stories-text-above {font-family:"Source Sans Pro", sans-serif; color:#535353; top: -30px; background: #fff; padding: 4px; font-weight: bold; font-size: 2.1rem; line-height: 1.3;}',
       CustomMetaParams: [{
          type: 'js',
          param: 'pageMetaSection',
          value: 'window["tp"].contentSection',
          transforms: []
        }],
  },
   mobile: {
	tagConfig: {
	  CustomViCSS: ' #vi-stories-text-above {font-family:"Source Sans Pro", sans-serif; color:#535353; top: -23px; background: #fff; padding: 4px; font-weight: bold; font-size: 1.5rem; line-height: 1.3;}',
	  
	}
  },
}); 
