/**/ typeof vi.publisherConfig === 'function' && vi.publisherConfig({ 
  tagConfig: { 
	    enableUserIdModules: true,
	    AdBreakRetry: true,
	    AllowMultipleInstances: true,
	 //   IASPixelEnabled: false,
	    TextAbove: 'Anzeige',
        AbTesting: {
          percentages: [60,40],
          'testPIV_true': {
              PlayInView: true,
          },
          'testPIV_false': {
              PlayInView: false,    
          },
        },
	  
	    Prebid: true,
        Float: false, 
	    FloatSize: 0.3,
	    FloatLimit: 336,
	    PlaylistMode:1,
	    PlaylistLength:5,
	    OverlayMode:1,
        Language: 'de-DE',
	    CustomViCSS: ' #vi-stories-text-above {font-family:"Open Sans", sans-serif; color:#333; top: -20px; background: #fff; font-size: 1.6rem; line-height: 1.15; } .vi-stories-display-banner-overlay.size728x90 {height:100px; left: calc(50% - 364px); width: 728px;}',
	    CustomMetaParams: [{
            type: 'js',
            param: 'videoIds',
            value: 'document.getElementById("vi-stories-data").getAttribute("data-video-ids")',
            transforms: []
        }],
       KeywordSearch: [{
            param: 'VI_CUSTOM8',
            scope: 'title, description, keywords',
            keys: 'corona, coronavirus, covid 19, covid19, covid-19, sarscov2, sars-cov-2, krise, epidemie, pandemie, infektionsschutz, infektion, ausgangsperre, kontaktsperre, virus, viren, robert koch institut, virologie, virologe, Sex, Porno, Attacken, Anschlag, Gewalt, Kinderporno, Toten, Polizei, Terror, Attacke, Absturz, Drogen, Betrug, Tote, Todesfall, Todesfälle, Unfall, lebensgefährlich, Autounfall , Abtreibung, Tierquälerei, Pandemien, stichwunden, Hassrede, Überdosis, rechtswidrig, verboten,Massaker,Gemetzel, Schlächterei, Abschiebung, Ausgangssperre, Tabak, vaping, E-Zigaretten, Rauchen, Terrorist, Bombe, Diffamierung, Schaden, Malware,virenalarm, Phishing, Illegale, Parliament Gewehr, Obszönität, beleidigen, Beleidigung, Völkermord, Kriegsverbrechen, Hasserfüllt, Verleumdung, Entwürdigung, Schimpf, Hasspropaganda, Sexismus, Rassistische, Homophobe, Judenhass, Belästigung, belästigt, Diskriminierung, Raubdruck, Tod, Sterben, Todesfall, Unglück, Waffen, Rüstung, Gewehre, Handfeuerwaffen, Pornographie, Geschlechtsverkehr, Kinderpornografie, Genitalien, Trump, revolte, black lives matter, aufruhr, Fauci, Trumps Vermächtnis, anklagen, beschuldigen, anfechten, Einweihung,Capitol, Aufstand, Aufruhr,protesten ,Unruhen'
        }],
       CustomParams: [
        {
            type: 'js',
            param: 'customStopConditionUrl',
            value: 'window.location.href',
            transforms: [{
                op: 'opSearch',
                params: [[
                    /\btag24\.de\/thema\/erotik\b/
                ]]
            }, {
                op: 'opFilterOut',
                params: ['']
            }]
            },{
            type: 'js',
            param: 'customStopConditionKeywords',
            value: '[Array.prototype.map.call(document.querySelectorAll("h1, h2, .dm_article_text h3, .dm_article_text p, .article-text p, .article-text h3"), function(elem){return elem.textContent}).join(), actions.getPageInfoFromMeta("name", "keywords", "all")]',
            transforms: [{
                op: 'opJoin',
                params: []
            },{
                op: 'opToLowerCase',
                params: []
            },{
                op: 'opSearch',
                params: [[/[\S]*pornostar[\S]*/,/[\S]*porn[\S]*/,/[\S]*pornodarstellerin[\S]*/,/[\S]*pornos[\S]*/,/[\S]*erotik[\S]*/,/[\S]*sex[\S]*/]]
            },{
               op: 'opFilterOut',
                params: ['']
            }]
        }],
       StopCondition: 'customStopConditionUrl, customStopConditionKeywords',
       CustomAdParams: [{
            type: 'js', 
            param: 'VI_WIDTH', 
            value: 'config.viPlayerConfig.width', 
            transforms: []
        }]
  }, 
  playerConfig: { 

  },
  viPlayerConfig: {
	preroll: 2,
	maximp      : 6,
	midrolltime	: 8,
	maxrun      : 25, 
	
	maxAdErrors       : 7, 
	waterfallRetry    : 8, 
	
	trackingEventsToBatch: ['r', 'e', 'l', 'ap', 'ab', 'in'],
	trackingEventsToDismiss: ['in','ap','ab']	
  },	  
  mobile: {
	tagConfig: {
	  CustomViCSS: ' #vi-stories-text-above {font-family:"Open Sans", sans-serif; color:#333; top: -20px; background: #fff; font-size: 1.6rem; line-height: 1.15; }',
	  FloatLimit:220,
	  FloatSize: 0.3,
	  DisplayBanner: {
	            },
	 	}
  },
}); 
