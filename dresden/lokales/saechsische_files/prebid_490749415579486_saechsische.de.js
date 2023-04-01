/**/ typeof vi.publisherConfig === 'function' && vi.publisherConfig({
    prebidConfig: {
		url: 'https://s.vi-serve.com/prebid/prebid5.17.0.js',
		bidderTimeout: 2000,
	    startInView: false,
		adUnits: [{
			code: 'vi-stories-prebid-adunit',
			mediaTypes: {
				banner: {
					sizes: [[580, 400], [480, 320]]
				}
			},
			bids: [{
				name: 'invibes',
				factor: 1,
				bidder: 'invibes',
				params: {
					placementId: 'invibes_saechsische',
					customEndpoint:'//bid2.videostep.com/Bid/VideoAdContent'
				}
			}]
			}]
	}
});