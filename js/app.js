
// POS dataset loaded from js/positions.js
const CAP = (typeof POS !== 'undefined' && POS.length) ? POS.length : 2646;
// PRODUTOS dataset loaded from js/products.js
const QTD_POR_CAIXA={"52882":140.0,"87982":85.0,"48141":41.0,"51213":41.0,"83960":72.0,"83961":85.0,"74438":40.0,"55366":40.0,"74444":40.0,"47851":40.0,"50651":40.0,"52898":40.0,"52896":450.0,"47411":90.0,"57640":120.0,"57210":60.0,"88301":98.0,"57211":98.0,"58299":24.0,"57206":88.0,"57207":30.0,"57750":80.0,"57749":80.0,"57758":80.0,"57759":80.0,"57761":80.0,"57764":80.0,"57763":80.0,"88910":80.0,"94609":80.0,"45557":320.0,"59132":48.0,"51802":48.0,"51808":20.0,"51803":30.0,"51805":140.0,"59957":60.0,"45025":12.0,"53725":32.0,"59845":20.0,"52022":20.0,"52023":30.0,"53726":16.0,"87353":100.0,"51801":20.0,"52025":30.0,"52019":20.0,"52018":30.0,"73388":18.0,"86214":270.0,"56156":16.0,"54483":48.0,"56579":50.0,"56592":35.0,"86212":45.0,"58139":110.0,"58138":80.0,"57639":24.0,"56583":200.0,"86218":50.0,"86220":50.0,"47596":80.0,"57731":48.0,"47598":80.0,"47600":84.0,"47602":80.0,"47599":80.0,"50395":48.0,"52342":48.0,"86866":80.0,"47963":48.0,"86865":80.0,"50396":80.0,"55930":48.0,"50158":160.0,"88903":48.0,"54665":450.0,"54657":35.0,"54658":40.0,"85646":450.0,"85647":450.0,"85644":35.0,"85645":40.0,"88019":40.0,"51391":450.0,"51395":40.0,"47553":24.0,"88022":40.0,"89261":35.0,"58733":35.0,"58729":40.0,"70112":48.0,"58123":100.0,"47905":30.0,"48352":24.0,"29046":85.0,"87898":40.0,"71877":30.0,"89260":40.0,"87946":30.0,"52029":40.0,"94326":40.0,"51225":25.0,"87484":120.0,"59875":60.0,"96606":352.0,"04509":96.0,"94198":120.0,"59876":96.0,"55408":384.0,"55407":48.0,"89459":140.0,"87482":48.0,"94195":120.0,"94536":48.0,"04520":48.0,"88471":96.0,"87491":48.0,"95761":48.0,"95770":48.0,"87780":54.0,"87597":48.0,"47729":60.0,"53838":111.0,"53386":111.0,"84808":408.0,"96724":70.0,"87600":70.0,"47321":70.0,"83550":70.0,"49403":192.0,"89457":88.0,"53186":192.0,"55403":88.0,"96743":70.0,"89485":88.0,"95777":70.0,"88823":20.0,"52051":20.0,"55142":20.0,"56209":20.0,"88821":20.0,"55143":20.0,"52095":20.0,"56181":20.0,"88820":20.0,"52086":20.0,"49401":20.0,"44803":16.0,"90841":240.0,"59193":48.0,"87066":48.0,"59197":48.0,"58020":48.0,"57046":38.0,"85324":38.0,"94675":116.0,"58565":38.0,"86024":96.0,"85121":136.0,"87068":30.0,"58132":60.0,"86092":60.0,"58363":60.0,"47148":72.0,"47144":72.0,"51161":72.0,"47151":72.0,"51164":80.0,"51131":144.0,"47145":144.0,"85920":60.0,"51130":60.0,"51123":60.0,"51239":60.0,"90219":60.0,"50881":60.0,"89790":60.0,"51147":60.0,"51236":60.0,"57591":80.0,"88395":60.0,"53511":60.0,"47154":144.0,"94676":80.0,"59407":48.0,"94673":48.0,"94989":47.0,"88691":30.0,"88697":30.0,"94763":30.0,"88695":48.0,"88694":30.0,"87315":48.0,"87443":30.0,"85672":48.0,"85671":30.0,"85677":108.0,"85543":48.0,"85124":30.0,"88310":30.0,"88689":48.0,"88688":30.0,"88700":30.0,"57042":30.0,"53510":48.0,"58227":30.0,"87067":48.0,"87078":48.0,"58521":45.0,"53971":300.0,"54805":120.0,"51235":38.0,"59196":300.0,"88056":30.0,"56680":80.0,"56836":36.0,"87963":70.0,"58342":70.0,"58231":91.0,"50882":25.0,"85679":25.0,"51231":70.0,"89663":24.0,"85564":25.0,"85120":70.0,"94764":70.0,"58239":25.0,"51227":25.0,"51226":70.0,"58357":25.0,"94499":25.0,"51165":25.0,"51166":70.0,"85547":25.0,"90995":48.0,"54064":108.0,"51168":36.0,"87079":48.0,"59188":48.0,"87064":48.0,"55104":48.0,"57091":48.0,"57982":48.0,"88913":120.0,"22248":30.0,"83060":40.0,"83059":48.0,"86868":48.0,"50956":85.0,"50677":32.0,"86869":48.0,"86870":70.0,"49267":80.0,"81330":32.0,"49250":30.0,"49252":30.0,"49249":30.0,"81384":30.0,"49245":35.0,"49244":35.0,"95013":450.0,"49247":35.0,"95012":450.0,"86077":72.0,"49193":35.0,"49154":30.0,"83756":32.0,"94208":48.0,"83684":24.0,"53921":24.0,"94572":24.0,"51441":24.0,"94199":24.0,"52140":28.0,"55245":28.0,"52136":28.0,"50797":30.0,"52147":28.0,"52164":28.0,"52110":28.0,"55222":60.0,"52172":28.0,"59701":20.0,"56198":14.0,"51436":28.0,"70683":28.0,"52175":28.0,"56601":28.0,"55243":28.0,"52122":28.0,"55223":48.0,"76621":48.0,"48634":48.0,"47908":48.0,"86028":25.0,"87556":38.0,"71815":38.0,"53930":72.0,"48657":72.0,"73367":85.0,"74893":85.0,"58638":85.0,"97384":56.0,"82686":56.0,"82685":56.0,"82689":56.0,"59436":56.0,"82688":56.0,"85054":56.0,"85056":450.0,"97381":56.0,"49812":56.0,"82690":56.0,"84214":56.0,"84213":56.0,"89653":56.0,"89661":450.0,"94983":48.0,"72052":38.0,"57088":80.0,"49813":48.0,"58499":38.0,"48375":24.0,"85796":24.0,"48653":72.0,"48143":48.0,"48146":48.0,"81331":48.0,"53518":48.0,"49288":10.0,"54887":6.0,"54886":4.0,"54879":12.0,"46931":9.0,"86154":18.0,"59564":10.0,"86465":16.0,"40220":12.0,"90812":16.0,"84049":36.0,"36485":10.0,"53922":9.0,"53159":12.0,"84047":12.0,"90805":8.0,"86432":8.0,"84113":7.0,"58528":10.0,"52639":12.0,"36226":6.0,"86206":10.0,"86167":4.0,"52640":12.0,"94194":7.0,"90505":9.0,"50931":9.0,"88209":7.0,"52654":24.0,"86464":10.0,"86431":7.0,"52482":40.0,"88359":54.0,"94966":24.0,"48646":54.0,"75082":80.0,"51581":85.0,"85483":85.0,"48310":35.0,"48307":35.0,"48315":35.0,"52493":35.0,"49978":450.0,"58373":35.0,"48303":35.0,"58372":35.0,"48296":35.0,"48298":450.0,"48313":35.0,"83357":60.0,"52507":30.0,"87896":30.0,"88135":30.0,"79998":85.0,"74096":42.0,"81108":42.0,"84224":42.0,"90954":450.0,"51704":42.0,"74055":42.0,"52752":42.0,"74103":42.0,"96293":48.0,"87951":16.0,"96399":24.0,"96398":24.0,"85935":24.0,"50022":25.0,"86983":25.0,"86985":450.0,"59555":25.0,"85947":48.0,"94859":48.0,"85936":63.0,"85606":44.0,"87203":13.0,"54121":25.0,"56686":7.0,"87918":36.0,"48510":80.0,"88203":24.0,"77990":24.0,"77685":24.0,"50172":140.0,"48696":72.0,"57882":85.0,"84182":50.0,"83971":30.0,"49680":30.0,"86895":30.0,"86897":450.0,"77988":34.0,"77517":34.0,"77989":34.0,"85702":68.0,"89331":34.0,"94539":55.0,"48181":63.0,"48508":68.0,"48734":56.0,"88911":32.0,"87915":108.0,"87920":36.0,"81849":40.0,"81756":40.0,"74043":40.0,"58591":80.0,"84487":54.0,"77183":38.0,"86988":38.0,"83065":72.0,"76700":40.0,"86990":40.0,"88895":40.0,"59466":40.0,"53415":40.0,"47339":40.0,"05009":24.0,"05125":48.0,"85164":360.0,"88585":360.0,"88473":360.0,"58813":360.0,"86166":270.0,"85854":85.0,"85849":85.0,"85846":85.0,"85855":85.0,"85852":85.0,"85848":85.0,"85853":85.0,"85850":85.0,"85851":85.0,"85847":85.0,"90729":234.0,"90728":234.0,"90727":234.0,"90726":234.0,"90724":234.0,"90723":234.0,"90722":234.0,"90721":234.0,"90720":234.0,"90719":234.0,"90718":234.0,"90717":234.0,"01808":234.0,"90714":234.0,"90713":234.0,"01789":234.0,"90711":234.0,"90710":234.0,"90709":234.0,"90673":234.0,"82548":234.0,"90671":234.0,"90669":234.0,"82550":234.0,"82551":234.0,"90665":234.0,"01862":234.0,"90664":234.0,"90662":234.0,"82553":234.0,"90660":234.0,"01861":234.0,"90659":234.0,"90658":234.0,"01863":234.0,"90655":234.0,"90654":234.0,"90653":234.0,"87040":85.0,"87041":85.0,"87042":85.0,"87043":85.0,"87044":85.0,"87045":85.0,"87046":85.0,"87048":85.0,"87049":85.0,"87039":85.0,"75742":120.0,"75754":120.0,"75767":120.0,"76824":120.0,"89552":85.0,"87790":85.0,"87791":85.0,"87792":85.0,"87793":85.0,"87794":85.0,"87795":85.0,"87796":85.0,"87797":85.0,"87799":85.0,"89067":85.0,"89068":85.0,"89069":85.0,"89070":85.0,"89071":85.0,"89073":85.0,"89074":85.0,"89075":85.0,"89076":85.0,"89077":85.0,"58982":88.0,"88663":88.0,"58983":88.0,"58986":88.0,"58990":88.0,"58991":88.0,"58992":88.0,"58993":88.0,"58994":88.0,"58996":88.0,"58997":88.0,"59002":88.0,"58981":88.0,"88523":360.0,"88517":360.0,"88522":360.0,"88515":360.0,"88518":360.0,"88520":360.0,"87818":360.0,"88519":360.0,"88521":360.0,"88527":360.0,"88552":234.0,"88554":234.0,"88016":234.0,"88010":234.0,"88015":234.0,"88012":234.0,"59053":280.0,"81621":360.0,"81624":360.0,"81618":360.0,"81626":360.0,"81623":360.0,"55984":532.0,"55981":532.0,"87803":360.0,"87802":360.0,"87804":360.0,"87801":360.0,"52794":234.0,"52795":234.0,"52798":234.0,"52797":234.0,"50704":224.0,"76689":425.0,"75757":425.0,"58566":234.0,"58622":234.0,"58626":234.0,"58627":234.0,"58629":234.0,"58630":234.0,"58631":234.0,"58632":234.0,"88947":280.0,"89026":280.0,"89027":280.0,"89028":280.0,"89029":280.0,"89030":280.0,"89031":280.0,"89032":280.0,"89033":280.0,"89153":280.0,"59039":216.0,"59040":216.0,"59043":216.0,"59044":216.0,"59045":216.0,"59049":216.0,"82815":70.0,"57753":128.0,"51173":234.0,"85668":224.0,"56586":12.0,"27858":1600.0,"55505":672.0,"89568":12.0,"56585":10.0,"52620":234.0,"55502":234.0,"52619":204.0,"52618":234.0,"50756":204.0,"73869":560.0,"96419":234.0,"56837":40.0,"85667":124.0,"85666":124.0,"87352":60.0,"40090":1360.0,"53906":192.0,"89576":160.0,"53847":480.0,"53910":192.0,"53936":168.0,"53907":168.0,"53904":144.0,"05546":165.0,"94875":63.0,"48015":280.0,"87805":72.0,"57500":72.0,"57493":540.0,"59024":80.0,"59034":54.0,"59037":54.0,"89518":140.0,"56688":80.0,"59029":80.0,"49362":72.0,"53927":72.0,"88560":144.0,"48785":85.0,"78000":85.0,"85481":450.0,"89294":35.0,"84400":35.0,"84399":35.0,"84391":35.0,"89272":35.0,"84390":35.0,"84388":35.0,"58506":35.0,"54231":35.0,"90513":35.0,"54101":35.0,"55357":30.0,"55358":450.0,"84385":42.0,"89782":50.0,"56690":48.0,"59019":40.0,"84688":40.0,"74965":40.0,"53901":40.0,"59030":99.0,"76756":70.0,"84682":70.0,"59021":48.0,"56687":63.0,"59035":54.0,"89780":54.0,"59031":54.0,"59033":48.0,"59493":54.0,"86336":48.0,"59036":70.0,"49379":70.0,"94962":96.0,"86665":81.0,"86666":81.0,"89694":48.0,"87768":48.0,"86668":48.0,"90322":48.0,"88003":48.0,"88006":48.0,"90706":48.0,"59582":48.0,"94626":48.0,"72521":48.0,"88007":48.0,"56797":48.0,"94531":48.0,"94617":28.0,"86670":28.0,"86673":28.0,"86802":48.0,"86667":48.0,"90750":60.0,"94200":28.0,"86273":45.0,"59577":45.0,"86314":140.0,"59581":45.0,"89789":105.0,"56811":45.0,"90151":45.0,"59580":70.0,"86674":88.0,"59574":88.0,"86671":48.0,"89693":48.0,"86663":48.0,"89819":48.0,"86658":48.0,"84739":80.0,"90704":48.0,"59583":48.0,"83697":48.0,"88008":48.0,"56796":48.0,"94866":48.0,"86272":66.0,"49150":48.0,"56812":140.0,"89495":108.0,"94867":110.0,"56005":48.0,"56004":72.0,"47150":72.0,"47152":72.0,"76666":46.0,"53933":144.0,"89493":60.0,"89262":105.0,"94750":72.0,"55968":48.0,"55975":48.0,"89494":48.0,"56839":40.0,"55083":48.0,"55253":80.0,"85452":48.0,"55194":48.0,"95802":38.0,"56841":45.0,"87917":108.0,"59823":30.0,"95798":48.0,"95795":30.0,"48280":60.0,"90981":60.0,"88563":60.0,"58135":60.0,"53353":60.0,"88027":60.0,"86369":60.0,"89366":60.0,"87272":60.0,"94610":60.0,"82052":60.0,"01634":48.0,"57829":30.0,"86765":30.0,"48672":48.0,"88082":30.0,"88079":48.0,"88077":30.0,"53346":30.0,"89421":48.0,"89422":30.0,"48771":48.0,"58978":30.0,"87364":35.0,"58987":40.0,"85423":38.0,"48997":40.0,"95801":40.0,"85097":40.0,"85099":40.0,"95920":40.0,"88730":40.0,"85098":40.0,"85096":40.0,"87050":54.0,"87051":54.0,"57675":38.0,"88365":38.0,"95803":116.0,"49963":48.0,"86761":42.0,"85421":42.0,"86757":42.0,"59830":42.0,"86755":42.0,"46442":16.0,"90366":40.0,"90371":70.0,"90370":40.0,"55763":32.0,"01302":32.0,"95405":40.0,"88299":11.0,"01317":32.0,"90375":70.0,"90379":40.0,"90381":40.0,"89830":10.0,"89831":7.0,"56000":22.0,"90376":40.0,"01314":32.0,"88308":85.0,"51244":44.0,"51242":44.0,"88364":44.0,"58526":44.0,"89258":44.0,"87773":44.0,"50662":44.0,"51806":35.0,"52040":35.0,"52024":35.0,"52021":35.0,"87483":70.0,"94197":70.0,"87599":70.0,"87030":70.0,"87031":70.0,"86504":35.0,"86505":35.0,"88340":48.0,"85542":35.0,"83212":54.0,"83211":54.0,"52589":40.0,"85797":40.0,"51453":85.0,"84255":54.0,"84260":54.0,"80849":40.0,"94758":40.0,"77689":40.0,"84705":54.0,"85548":40.0,"86669":35.0,"84743":40.0,"59824":35.0,"95797":35.0,"57830":35.0,"89420":35.0,"58980":35.0,"59516":35.0,"59517":35.0,"53347":35.0,"59518":35.0,"85052":52.0,"85051":52.0,"85058":52.0,"86758":40.0,"86759":40.0,"48790":85.0,"51500":30.0,"70668":30.0,"70669":30.0,"49264":48.0,"59169":48.0,"59170":48.0,"70693":48.0,"87363":60.0,"51438":22.0,"49265":48.0,"54169":48.0,"86061":70.0,"86058":70.0,"86059":70.0,"19734":30.0,"89816":27.0,"83529":27.0,"87842":27.0,"89281":27.0,"48777":40.0,"54325":30.0,"80887":85.0,"49766":40.0,"50418":40.0,"50732":40.0,"49765":40.0,"49038":58.0,"48784":72.0,"49039":50.0,"51874":36.0,"46898":36.0,"88295":36.0,"58644":36.0,"90321":36.0,"90308":55.0,"90310":36.0,"54457":36.0,"48368":50.0,"49487":48.0,"93024":40.0,"49803":40.0,"49562":80.0,"51304":72.0,"47647":72.0,"50014":85.0,"87325":44.0,"87328":44.0,"87300":44.0,"87299":44.0,"58845":44.0,"87293":44.0,"87292":44.0,"87938":44.0,"49568":50.0,"90609":48.0,"47819":72.0,"56458":85.0,"53979":45.0,"93541":45.0,"52107":45.0,"93545":45.0,"59012":45.0,"85328":45.0,"93546":48.0,"87151":48.0,"48150":70.0,"93729":20.0,"93640":15.0,"57902":13.0,"96397":24.0,"52745":24.0,"86750":24.0,"87807":24.0,"88687":24.0,"86751":24.0,"86749":24.0,"57057":70.0,"58633":85.0,"90141":85.0,"89715":85.0,"94057":29.0,"87517":29.0,"94059":29.0,"94060":29.0,"87518":29.0,"57550":29.0,"86259":29.0,"89767":29.0,"89642":48.0,"87017":48.0,"86902":48.0,"85268":48.0,"87014":48.0,"87013":48.0,"51452":90.0,"88748":48.0,"50268":48.0,"56365":48.0,"50271":48.0,"59549":48.0,"50267":48.0,"86293":391.0,"89635":336.0,"81132":32.0,"86311":80.0,"94062":80.0,"91009":80.0,"87444":352.0,"87437":352.0,"87436":352.0,"87435":352.0,"87446":352.0,"84960":85.0,"84962":85.0,"84967":85.0,"84970":85.0,"84972":85.0,"85008":88.0,"85011":88.0,"85007":88.0,"85012":88.0,"85023":88.0,"85024":88.0,"85026":88.0,"85027":88.0,"84859":442.0,"84860":442.0,"84861":442.0,"84862":442.0,"86524":442.0,"84863":442.0,"84864":442.0,"86534":442.0,"84878":475.0,"84879":475.0,"84880":475.0,"84881":475.0,"84882":475.0,"58815":540.0,"58816":540.0,"79364":368.0,"79363":368.0,"87439":368.0,"87440":368.0,"94516":368.0,"87442":368.0,"79365":368.0,"95367":368.0,"84889":540.0,"84888":540.0,"84908":391.0,"86605":391.0,"84907":391.0,"86533":442.0,"84867":442.0,"84866":442.0,"84868":442.0,"86535":442.0,"84869":442.0,"84865":442.0,"84871":442.0,"84872":442.0,"86536":442.0,"84873":442.0,"84874":442.0,"84875":442.0,"84876":442.0,"84877":442.0,"94220":368.0,"94221":368.0,"94226":368.0,"94228":368.0,"94230":368.0,"94232":368.0,"87434":475.0,"80835":144.0,"89095":315.0,"85006":540.0,"86611":540.0,"86555":540.0,"89097":315.0,"89098":315.0,"94210":315.0,"89096":315.0,"94213":432.0,"94212":432.0,"84921":560.0,"84922":560.0,"87404":540.0,"84946":234.0,"89977":234.0,"86538":234.0,"89980":126.0,"85075":140.0,"85076":140.0,"85077":140.0,"85078":140.0,"85079":140.0,"85080":140.0,"85081":140.0,"85082":140.0,"80939":50.0,"80837":36.0,"80877":32.0,"56666":12.0,"57642":70.0,"56770":96.0,"55295":36.0,"55296":36.0,"95755":80.0,"54475":70.0,"54478":80.0,"53447":72.0,"94054":48.0,"94052":48.0,"53452":48.0,"57597":48.0,"50112":48.0,"94051":48.0,"85321":48.0,"55894":96.0,"55903":96.0,"55890":96.0,"55885":96.0,"50634":85.0,"50629":85.0,"50627":85.0,"50624":85.0,"50623":85.0,"50632":85.0,"53406":85.0,"53019":475.0,"56761":475.0,"70883":425.0,"56642":384.0,"56641":384.0,"56643":384.0,"55795":85.0,"55797":85.0,"55798":85.0,"01159":165.0,"56678":36.0,"81130":60.0,"70878":549.0,"92202":104.0,"01454":144.0,"58641":85.0,"53142":35.0,"53138":35.0,"53144":35.0,"53145":48.0,"49583":50.0,"49584":48.0,"56459":85.0,"49577":30.0,"49579":30.0,"49570":80.0,"54313":36.0,"94821":48.0,"94816":36.0,"94815":36.0,"86225":36.0,"85316":140.0,"95093":66.0,"87766":66.0,"87761":66.0,"87759":66.0,"95094":66.0,"94659":100.0,"95619":66.0,"58636":66.0,"87767":66.0,"87765":66.0,"86041":144.0,"86031":144.0,"86032":72.0,"47815":72.0,"86035":72.0,"53196":72.0,"47818":72.0,"86038":80.0,"86030":80.0,"86042":80.0,"89701":66.0,"87143":36.0,"58937":48.0,"87155":36.0,"52384":36.0,"87126":36.0,"87152":36.0,"87107":36.0,"87131":36.0,"89451":36.0,"87128":48.0,"95354":100.0,"94984":48.0,"94658":108.0,"87137":48.0,"87135":36.0,"87157":36.0,"85395":25.0,"85369":25.0,"89453":25.0,"54312":72.0,"94820":48.0,"54190":100.0,"54189":100.0,"85285":48.0,"85306":48.0,"87257":36.0,"95355":100.0,"54317":66.0,"86501":66.0,"50010":70.0,"51432":40.0,"58933":40.0,"54450":40.0,"49063":40.0,"87291":40.0,"87290":40.0,"86893":10.0,"55764":22.0,"55630":144.0,"58405":48.0,"93062":24.0,"12967":24.0,"52748":24.0,"58640":85.0,"49543":30.0,"93548":30.0,"56742":36.0,"94879":35.0,"94886":60.0,"58639":85.0,"87380":40.0,"51730":40.0,"57371":450.0,"87453":40.0,"51780":48.0,"57476":85.0,"88716":35.0,"52943":35.0,"71286":35.0,"93220":30.0,"52542":30.0,"59207":48.0,"56462":80.0,"56463":80.0,"56464":80.0,"56465":80.0,"54073":126.0,"59706":384.0,"52038":80.0,"52033":80.0,"59683":96.0,"57072":270.0,"59681":192.0,"52036":96.0,"55670":96.0,"52169":108.0,"55671":96.0,"52243":70.0,"52168":48.0,"57074":96.0,"52247":48.0,"56526":80.0,"56527":80.0,"52037":80.0,"59682":126.0,"57073":126.0,"59689":100.0,"53919":126.0,"54525":102.0,"48101":102.0,"48102":102.0,"48106":102.0,"48104":102.0,"48108":102.0,"48107":102.0,"48105":102.0,"48103":102.0,"49460":102.0,"49459":102.0,"95312":384.0,"59888":144.0,"59890":144.0,"59891":144.0,"59885":384.0,"59884":384.0,"59883":384.0,"90300":100.0,"89645":120.0,"56765":64.0,"87456":432.0,"87455":432.0,"52318":42.0,"59526":42.0,"87303":40.0,"93493":168.0,"87302":120.0,"52584":672.0,"52583":672.0,"90108":256.0,"59887":266.0,"59886":266.0,"89648":68.0,"94505":266.0,"54612":266.0,"54613":266.0,"54516":228.0,"86603":228.0,"56679":84.0,"53767":120.0,"57781":60.0,"56672":60.0,"56671":60.0,"56670":60.0,"90818":270.0,"56675":60.0,"56674":60.0,"89180":120.0,"55731":116.0,"55732":116.0,"55733":116.0,"55734":116.0,"54506":330.0,"54527":102.0,"01062":42.0,"56676":360.0,"52582":266.0,"52585":266.0,"09400":266.0,"87308":36.0,"57025":48.0,"56163":6.0,"56164":24.0,"87304":120.0,"87309":30.0,"89800":48.0,"07450":72.0,"86804":96.0,"07379":70.0,"85915":108.0,"07394":70.0,"85845":48.0,"51348":96.0,"51349":270.0,"59696":60.0,"52864":96.0,"55481":99.0,"90083":99.0,"55437":88.0,"07395":99.0,"55438":70.0,"90924":21.0,"59565":21.0,"52216":21.0,"53013":80.0,"87338":44.0,"87340":44.0,"85899":44.0,"58056":44.0,"78620":44.0,"52746":40.0,"56646":560.0,"56645":560.0,"56644":560.0,"56640":560.0,"56638":560.0,"56639":560.0,"56636":560.0,"87127":35.0,"87132":35.0,"87262":35.0,"87779":35.0,"52389":35.0,"59189":70.0,"55677":40.0,"54362":35.0,"91000":48.0,"94969":48.0,"93275":96.0,"93277":96.0,"93278":96.0,"93279":96.0,"93280":96.0,"93281":96.0,"93282":96.0,"93283":96.0,"93284":96.0,"93285":96.0,"93288":96.0,"93498":96.0,"93274":96.0,"55805":48.0,"53358":468.0,"85755":99.0,"53357":468.0,"85756":99.0,"54095":108.0,"53501":48.0,"89679":48.0,"53430":48.0,"51745":48.0,"07066":48.0,"56294":48.0,"47176":48.0,"93047":48.0,"52190":48.0,"30302":48.0,"53505":48.0,"53499":48.0,"58120":48.0,"88304":48.0,"47401":24.0,"53436":48.0,"53095":48.0,"58308":48.0,"53520":48.0,"53441":48.0,"55803":48.0,"55474":48.0,"55473":48.0,"87558":48.0,"58310":48.0,"58311":48.0,"53464":48.0,"53469":15.0,"56295":15.0,"56296":15.0,"58312":48.0,"58122":70.0,"88918":48.0,"53754":24.0,"57415":48.0,"51750":70.0,"53438":108.0,"53096":48.0,"53503":108.0,"47178":70.0,"57076":70.0,"57491":45.0,"53506":45.0,"89680":45.0,"53433":45.0,"51749":45.0,"47364":45.0,"47177":45.0,"01644":45.0,"53500":45.0,"58121":45.0,"88917":45.0,"93105":45.0,"53437":36.0,"53355":45.0,"53521":45.0,"53440":45.0,"51517":15.0,"55804":45.0,"87559":45.0,"87560":72.0,"89641":40.0,"93131":63.0,"94401":63.0,"86875":63.0,"85995":63.0,"56297":63.0,"52214":105.0,"89681":96.0,"55476":48.0,"53502":48.0,"89678":48.0,"90923":48.0,"53428":48.0,"51746":48.0,"19816":48.0,"52212":48.0,"56293":48.0,"52213":48.0,"47175":48.0,"01641":48.0,"30199":48.0,"52204":48.0,"53504":48.0,"58119":48.0,"88303":48.0,"47400":24.0,"53435":48.0,"55488":48.0,"53094":48.0,"58307":48.0,"53519":48.0,"53439":48.0,"55802":48.0,"55472":48.0,"87557":48.0,"53434":96.0,"56298":48.0,"87950":54.0,"53517":140.0,"52208":77.0,"55444":48.0,"47460":140.0,"47467":140.0,"47466":140.0,"47463":140.0,"47462":140.0,"47459":140.0,"47465":140.0,"73687":80.0,"58084":442.0,"55956":442.0,"58257":540.0,"50012":70.0,"92219":41.0,"87334":41.0,"87330":41.0,"86335":34.0,"59130":34.0,"88219":24.0,"51975":24.0,"55208":192.0,"57966":24.0,"83836":24.0,"82083":24.0,"56606":24.0,"82086":24.0,"51859":192.0,"83851":192.0,"82094":192.0,"51984":70.0,"54028":48.0,"56279":72.0,"56278":72.0,"86396":29.0,"86397":29.0,"47378":29.0,"94704":29.0,"83843":80.0,"82064":29.0,"51991":29.0,"58201":48.0,"51787":48.0,"51782":48.0,"86320":70.0,"85829":29.0,"83839":70.0,"82060":29.0,"58716":29.0,"56488":29.0,"82063":29.0,"83840":70.0,"82061":29.0,"57965":29.0,"85361":70.0,"85165":29.0,"47407":29.0,"48505":70.0,"83845":29.0,"83844":29.0,"83976":29.0,"51783":29.0,"86325":29.0,"86332":70.0,"85826":29.0,"52280":24.0,"56607":24.0,"82092":24.0,"83823":24.0,"83837":24.0,"83824":24.0,"82091":24.0,"48555":90.0,"58208":90.0,"51796":90.0,"47416":90.0,"82098":30.0,"47415":90.0,"57085":24.0,"51793":24.0,"52279":48.0,"82084":40.0,"47620":40.0,"47618":88.0,"47611":88.0,"86333":88.0,"86160":210.0,"85924":210.0,"95126":192.0,"95127":192.0,"90679":88.0,"90688":88.0,"90690":88.0,"90694":88.0,"90696":88.0,"90345":88.0,"90349":88.0,"90537":88.0,"90357":88.0,"90359":88.0,"90362":88.0,"90364":88.0,"90365":88.0,"86124":140.0,"86126":140.0,"86127":140.0,"86129":140.0,"89255":140.0,"86123":140.0,"58181":330.0,"58186":330.0,"56868":330.0,"56867":330.0,"86134":330.0,"86132":330.0,"86133":330.0,"58190":330.0,"58192":330.0,"58189":330.0,"58193":330.0,"56847":204.0,"56849":204.0,"56851":204.0,"56844":204.0,"86136":330.0,"86137":330.0,"89204":24.0,"89206":24.0,"89205":24.0,"89203":24.0,"84754":204.0,"84752":204.0,"89870":64.0,"56924":442.0,"56929":442.0,"88741":160.0,"90593":30.0,"56911":204.0,"56905":204.0,"56906":204.0,"56907":204.0,"90893":210.0,"88740":144.0,"56873":780.0,"55230":1500.0,"59359":560.0,"87520":1500.0,"59358":560.0,"87425":200.0,"89991":80.0,"95352":192.0,"95351":192.0,"88720":70.0,"55595":234.0,"47196":234.0,"50713":234.0,"55986":234.0,"55596":234.0,"55588":234.0,"80479":391.0,"80444":391.0,"86119":234.0,"55207":624.0,"49900":192.0,"49909":240.0,"59468":96.0,"59469":96.0,"90507":12.0,"55592":88.0,"79484":80.0,"90517":36.0,"90508":36.0,"90519":36.0,"90509":36.0,"90516":36.0,"90510":36.0};
let boxes=JSON.parse(localStorage.getItem('p5_1_boxes')||'[]'), moves=JSON.parse(localStorage.getItem('p5_1_moves')||'[]'), seq=Number(localStorage.getItem('p5_1_seq')||0);
window.getBoxes = function() { return boxes; };
window.setBoxes = function(newBoxes) { boxes = newBoxes; localStorage.setItem('p5_1_boxes', JSON.stringify(boxes)); if(typeof map==='function') map(); if(typeof dash==='function') dash(); };
window.getMoves = function() { return moves; };
window.setMoves = function(newMoves) { moves = newMoves; localStorage.setItem('p5_1_moves', JSON.stringify(moves)); if(typeof mov==='function') mov(); };

function save(){localStorage.setItem('p5_1_boxes',JSON.stringify(boxes));localStorage.setItem('p5_1_moves',JSON.stringify(moves));localStorage.setItem('p5_1_seq',seq);if(typeof syncSaveToSupabase === 'function') syncSaveToSupabase();}
function limparAlocacoesVazias(){
 const antes=boxes.length;
 boxes=boxes.filter(b=>{
   if(b.origem!=='PLANILHA_ENDERECAMENTO') return true;
   return (b.productCodes||[]).some(c=>normalCode(c));
 });
 if(boxes.length!==antes) save();
}
function inicializarBasePlanilha(){
  return;
}


function canonicalAddressKey(input) {
  if (!input) return '';
  const str = String(input).trim().toUpperCase();
  // 1. Padrão completo com Coluna (A-E): RUA 01 - RACK 01 - LINHA 01 - A (opcional sub: - 1)
  const m1 = str.match(/^(?:RUA|R)?\s*0*(\d+)\s*[-_/\s]+\s*(?:R|RACK|RCK)?\s*0*(\d+)\s*[-_/\s]+\s*(?:L|LINHA|N|NIVEL|P|POS|POSICAO|ANDAR)?\s*0*(\d+)\s*[-_/\s]+\s*([A-E])(?:\s*[-_/\s]+\s*0*(\d+))?$/i);
  if (m1) {
    const ruaNum = parseInt(m1[1], 10);
    const rack = parseInt(m1[2], 10);
    const linha = parseInt(m1[3], 10);
    const col = m1[4].toUpperCase();
    const sub = m1[5] ? '-' + String(parseInt(m1[5], 10)).padStart(2, '0') : '';
    return 'RUA' + ruaNum + '-R' + String(rack).padStart(2, '0') + '-L' + String(linha).padStart(2, '0') + '-' + col + sub;
  }
  // 2. 4 números: 01-01-01-01 (Rua, Rack, Linha, Vaga 1..5)
  const m4 = str.match(/^(?:RUA|R)?\s*0*(\d+)\s*[-_/\s]+\s*(?:R|RACK|RCK)?\s*0*(\d+)\s*[-_/\s]+\s*(?:L|LINHA|N|NIVEL|P|POS|POSICAO|ANDAR)?\s*0*(\d+)\s*[-_/\s]+\s*(?:P|POS|VAGA|COL)?\s*0*(\d+)$/i);
  if (m4) {
    const ruaNum = parseInt(m4[1], 10);
    const rack = parseInt(m4[2], 10);
    const linha = parseInt(m4[3], 10);
    const pNum = parseInt(m4[4], 10);
    const col = (ruaNum === 5 || ruaNum === 7) ? (['B','C','D','E','A'][pNum - 1] || 'B') : (['A','B','C','D','E'][pNum - 1] || 'A');
    return 'RUA' + ruaNum + '-R' + String(rack).padStart(2, '0') + '-L' + String(linha).padStart(2, '0') + '-' + col;
  }
  // 3. 3 números: 01-01-01 (Rua, Rack, Linha)
  const m3 = str.match(/^(?:RUA|R)?\s*0*(\d+)\s*[-_/\s]+\s*(?:R|RACK|RCK)?\s*0*(\d+)\s*[-_/\s]+\s*(?:L|LINHA|N|NIVEL|P|POS|POSICAO|ANDAR)?\s*0*(\d+)$/i);
  if (m3) {
    const ruaNum = parseInt(m3[1], 10);
    const rack = parseInt(m3[2], 10);
    const linha = parseInt(m3[3], 10);
    return 'RUA' + ruaNum + '-R' + String(rack).padStart(2, '0') + '-L' + String(linha).padStart(2, '0') + '-B';
  }
  // 4. Padrão curto: RUA 5 - 6B (Rua 5, Rack 6, Coluna B)
  const mCurto = str.match(/^(?:RUA|R)?\s*0*(\d+)\s*[-_/\s]*(?:R|RACK)?\s*0*(\d+)\s*[-_/\s]*([A-E])$/i);
  if (mCurto) {
    const ruaNum = parseInt(mCurto[1], 10);
    const rack = parseInt(mCurto[2], 10);
    const col = mCurto[3].toUpperCase();
    return 'RUA' + ruaNum + '-R' + String(rack).padStart(2, '0') + '-L01-' + col;
  }
  return str.replace(/[^A-Z0-9]/g, '');
}
window.canonicalAddressKey = canonicalAddressKey;

function salvarPosicaoCustomizada(p) {
  try {
    const custom = JSON.parse(localStorage.getItem('p5_1_custom_positions') || '[]');
    if (!custom.some(x => x.id === p.id)) {
      custom.push(p);
      localStorage.setItem('p5_1_custom_positions', JSON.stringify(custom));
    }
  } catch(e) {}
}

function restaurarPosicoesCustomizadas() {
  if (typeof POS === 'undefined') return;
  try {
    const custom = JSON.parse(localStorage.getItem('p5_1_custom_positions') || '[]');
    const ids = new Set(POS.map(p => p.id));
    custom.forEach(p => {
      if (p && p.id && !ids.has(p.id)) {
        POS.push(p);
        ids.add(p.id);
      }
    });
  } catch(e) {}
}

function garantirPosicoesParaEnderecos() {
  if (typeof POS === 'undefined') return;
  restaurarPosicoesCustomizadas();
  const ids = new Set(POS.map(p => canonicalAddressKey(p.id)));

  // Posições de caixas armazenadas
  (boxes || []).forEach(b => {
    if (b && b.address) {
      const k = canonicalAddressKey(b.address);
      if (k && !ids.has(k)) {
        const pos = encontrarPosicaoPorCodigoOuTexto(b.address);
        if (pos) ids.add(canonicalAddressKey(pos.id));
      }
    }
  });

  // Posições do mapa mestre
  if (window.MAPA_ENDERECOS_PRODUTOS) {
    Object.values(window.MAPA_ENDERECOS_PRODUTOS).forEach(addr => {
      if (addr) {
        const k = canonicalAddressKey(addr);
        if (k && !ids.has(k)) {
          const pos = encontrarPosicaoPorCodigoOuTexto(addr);
          if (pos) ids.add(canonicalAddressKey(pos.id));
        }
      }
    });
  }
}
window.garantirPosicoesParaEnderecos = garantirPosicoesParaEnderecos;

function extrairCodigoProduto(input) {
  const codigo_barras = String(input ?? '').trim();
  if (!codigo_barras) {
    return { codigo_barras: '', codigo_produto: '', valido: false, erro: 'Por favor, informe ou bipe o código de barras ou código do produto.' };
  }
  
  const digits = codigo_barras.replace(/\D/g, '');

  if (digits.length >= 6) {
    // Código de barras completo (ex: EAN-13 / DUN-14)
    // Ignora o último dígito, considera os 5 dígitos consecutivos anteriores
    const codigo_produto = digits.slice(-6, -1);
    return { codigo_barras, codigo_produto, valido: true, erro: null };
  } else if (digits.length >= 1 && digits.length <= 5) {
    // Código de produto direto (ex: "1314" -> "01314" ou "48060")
    return { codigo_barras, codigo_produto: digits.padStart(5, '0'), valido: true, erro: null };
  } else {
    // Alfanumérico direto
    return {
      codigo_barras,
      codigo_produto: codigo_barras.toUpperCase(),
      valido: true,
      erro: null
    };
  }
}

function normalCode(v) {
  return extrairCodigoProduto(v).codigo_produto;
}
function lookup(code){
 if (!code) return '';
 const raw = String(code).trim();
 const pad = raw.padStart(5, '0');
 if (typeof PRODUTOS !== 'undefined') {
   if (PRODUTOS[pad]) return PRODUTOS[pad];
   if (PRODUTOS[raw]) return PRODUTOS[raw];
 }
 return 'Código ' + raw;
}
function parseCodes(text){return [...new Set(String(text||'').split(/[,;\\s]+/).map(x=>x.trim()).filter(Boolean).map(normalCode))]}
function family(name){let s=String(name||'').toUpperCase();const keys=['LILY','BOTICOLLECTION','MALBEC','QUASAR','FLORATTA','EGEO','COFFEE','THE BLEND','MAKE B.','NATIVA SPA','CUIDE-SE BEM','ACQUA','ARBO','ZAAD','PORTINARI','DREAM','INSENSATEZ','GIOVANNA BABY','MEN','WOMEN','CELEBRE','INTENSE','KESS','LINDA','URBAN','MATCH','CUPUAÇU','CAPIM LIMÃO','NARCISO','CLUB 6','BEBÊ'];for(const k of keys)if(s.includes(k))return k;return 'OUTROS'}
function productInfo(codes){return codes.map(code=>({code,name:lookup(code)||'Código não encontrado na base',family:family(lookup(code)||'')}))}
function previewProducts(){let codes=parseCodes(document.getElementById('codigos').value),items=productInfo(codes),el=document.getElementById('prodPreview');if(!codes.length){el.style.display='none';return}el.style.display='block';el.innerHTML='<b>Produtos identificados:</b><ul style="margin:7px 0 0 18px">'+items.map(x=>'<li><b>'+x.code+'</b> — '+x.name+(x.name!=='Código não encontrado na base'?' <span class="small">['+x.family+']</span>':'')).join('')+'</ul>'}
document.getElementById('codigos')?.addEventListener('input',previewProducts)
inicializarBasePlanilha()
function xmlLast5Code(v){let digits=String(v||'').replace(/\\D/g,'');return digits.slice(-5).padStart(5,'0')}
let xmlItems=[];
function importarXML(input){
 let f=input.files?.[0]; if(!f)return; let reader=new FileReader();
 reader.onload=()=>{try{
  let xml=new DOMParser().parseFromString(reader.result,'text/xml'); let dets=[...xml.querySelectorAll('det')];
  let nfNode=xml.querySelector('ide nNF'),serieNode=xml.querySelector('ide serie'); xmlItems=[]; let faltantes=[];
  dets.forEach(d=>{let c=d.querySelector('prod cProd')?.textContent||'';let code=xmlLast5Code(c);let q=Number((d.querySelector('prod qCom')?.textContent||d.querySelector('prod qTrib')?.textContent||'0').replace(',','.'));if(code&&q>0){let item=xmlItems.find(x=>x.code===code);if(item)item.quantity+=q;else xmlItems.push({code,quantity:q,name:lookup(code)||'Código não encontrado na base'});}});
  xmlItems=xmlItems.map(x=>{const qpc=getQtdPorCaixa(x.code);const caixas=qpc>0?Math.floor(x.quantity/qpc):0;const sobra=qpc>0?x.quantity-(caixas*qpc):x.quantity;if(!qpc)faltantes.push(x.code);return {...x,qtdPorCaixa:qpc,caixas,sobra};});
  document.getElementById('codigos').value=xmlItems.map(x=>x.code).join(', '); if(nfNode)document.getElementById('nf').value=nfNode.textContent; if(serieNode)document.getElementById('serie').value=serieNode.textContent; previewProducts(); mostrarCalculoXML();
  if(!dets.length)alert('Não encontrei produtos no XML. Confira se é uma NF-e válida.'); else if(faltantes.length)alert('XML importado, mas falta quantidade por caixa na planilha para: '+faltantes.join(', ')+'. Esses itens não serão alocados.'); else alert('XML importado. A quantidade da NF será dividida pela quantidade por caixa. Somente caixas fechadas serão alocadas; as sobras irão para o relatório.');
 }catch(e){xmlItems=[];alert('Não foi possível ler o XML da NF-e.');}}; reader.readAsText(f); input.value='';
}
function mostrarCalculoXML(){const el=document.getElementById('sobraPreview');if(!el)return;if(!xmlItems.length){el.style.display='none';return}el.style.display='block';let linhas=xmlItems.map(x=>`<tr><td>${x.code}</td><td>${esc(x.name)}</td><td>${x.quantity}</td><td>${x.qtdPorCaixa||'NÃO CADASTRADA'}</td><td><b>${x.caixas}</b></td><td><b>${x.sobra}</b></td></tr>`).join('');el.innerHTML=`<b>Prévia da divisão da NF</b><div style="overflow:auto;margin-top:8px"><table><tr><th>Código</th><th>Produto</th><th>Qtd. NF</th><th>Qtd./caixa</th><th>Caixas fechadas</th><th>Sobra</th></tr>${linhas}</table></div>`;}
function registrarRelatorioSobras(nfNumero,serieNumero,items,operador){const atual=JSON.parse(localStorage.getItem('p5_1_sobras')||'[]');const now=new Date().toISOString();items.filter(x=>x.sobra>0||!x.qtdPorCaixa).forEach(x=>atual.push({data:now,nf:nfNumero,serie:serieNumero||'',codigo:x.code,descricao:x.name,quantidadeNF:x.quantity,qtdPorCaixa:x.qtdPorCaixa||'',caixasFechadas:x.caixas,sobra:x.sobra,operador:operador||''}));localStorage.setItem('p5_1_sobras',JSON.stringify(atual));renderSobras();}
function renderSobras(){const el=document.getElementById('tabelaSobras');if(!el)return;const a=JSON.parse(localStorage.getItem('p5_1_sobras')||'[]').slice().reverse();el.innerHTML=a.length?'<table><tr><th>Data</th><th>NF</th><th>Código</th><th>Descrição</th><th>Qtd. NF</th><th>Qtd./caixa</th><th>Caixas fechadas</th><th>Sobra</th><th>Operador</th></tr>'+a.map(x=>`<tr><td>${new Date(x.data).toLocaleString('pt-BR')}</td><td>${esc(x.nf)}</td><td>${esc(x.codigo)}</td><td>${esc(x.descricao)}</td><td>${x.quantidadeNF}</td><td>${x.qtdPorCaixa||'-'}</td><td>${x.caixasFechadas}</td><td><b>${x.sobra}</b></td><td>${esc(x.operador)}</td></tr>`).join('')+'</table>':'<div class="notice">Nenhuma sobra registrada.</div>';}
function exportarSobrasCSV(){const a=JSON.parse(localStorage.getItem('p5_1_sobras')||'[]');const rows=[['Data','NF','Série','Código','Descrição','Qtd NF','Qtd por caixa','Caixas fechadas','Sobra','Operador'],...a.map(x=>[x.data,x.nf,x.serie,x.codigo,x.descricao,x.quantidadeNF,x.qtdPorCaixa,x.caixasFechadas,x.sobra,x.operador])];const csv=rows.map(r=>r.map(v=>`"${String(v??'').replaceAll('"','""')}"`).join(';')).join('\n');const ael=document.createElement('a');ael.href=URL.createObjectURL(new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'}));ael.download='relatorio_sobras_nf.csv';ael.click();}
function limparSobras(){if(confirm('Limpar todo o relatório de sobras?')){localStorage.removeItem('p5_1_sobras');renderSobras();}}
function go(id){document.querySelectorAll('section').forEach(x=>x.classList.remove('active'));document.getElementById(id).classList.add('active');if(id==='painel')dash();if(id==='entrada')ult();if(id==='caixa'){ultCaixa();preencherSelectEnderecosCaixa();}if(id==='pulmao')map();if(id==='mov')mov();if(id==='sobras')renderSobras()}
function stored(){return boxes.filter(b=>b.status==='ARMAZENADA')}
function dash(){
 const o = stored().length;
 const CAP = (typeof POS !== 'undefined' && POS.length) ? POS.length : 2646;
 const ocupEl = document.getElementById('ocup');
 const livreEl = document.getElementById('livre');
 const percEl = document.getElementById('perc');
 const capCardEl = document.getElementById('capCard');
 const capHeadEl = document.getElementById('capHeader');

 if (ocupEl) ocupEl.textContent = o.toLocaleString('pt-BR');
 if (livreEl) livreEl.textContent = Math.max(0, CAP - o).toLocaleString('pt-BR');
 if (percEl) percEl.textContent = (CAP ? (o / CAP * 100).toFixed(1) : '0').replace('.', ',') + '%';
 if (capCardEl) capCardEl.textContent = CAP.toLocaleString('pt-BR');
 if (capHeadEl) capHeadEl.textContent = CAP.toLocaleString('pt-BR');
}

function encontrarVagasParaProduto(productCode, qtd, usedSet) {
  const normC = normalCode(productCode);
  const result = [];
  const taken = new Set(usedSet);
  const posList = (typeof POS !== 'undefined') ? POS : [];
  const validPositions = posList.filter(p => p.rua !== 'PALETE' && ['B', 'C', 'D', 'E'].includes(p.col));

  const storedBoxes = typeof stored === 'function' ? stored() : [];
  const existingBoxes = storedBoxes.filter(b => (b.productCodes || []).some(c => normalCode(c) === normC));
  const activeRacks = new Set();
  existingBoxes.forEach(b => {
    const p = posList.find(x => x.id === b.address);
    if (p) activeRacks.add(p.rua + '-' + p.rack);
  });

  const preAssigned = validPositions.filter(p => normalCode(p.material) === normC);
  preAssigned.forEach(p => {
    activeRacks.add(p.rua + '-' + p.rack);
  });

  // 1. Posições pré-cadastradas para o produto
  for (const p of preAssigned) {
    if (result.length >= qtd) break;
    if (!taken.has(p.id)) {
      result.push(p);
      taken.add(p.id);
    }
  }

  // 2. Posições no mesmo Rack dos itens do mesmo produto (Agrupamento)
  if (result.length < qtd && activeRacks.size > 0) {
    const sameRackFree = validPositions.filter(p => activeRacks.has(p.rua + '-' + p.rack) && !taken.has(p.id));
    for (const p of sameRackFree) {
      if (result.length >= qtd) break;
      result.push(p);
      taken.add(p.id);
    }
  }

  // 3. Qualquer posição livre válida no pulmão (B/C/D/E)
  if (result.length < qtd) {
    const generalFree = validPositions.filter(p => !taken.has(p.id));
    for (const p of generalFree) {
      if (result.length >= qtd) break;
      result.push(p);
      taken.add(p.id);
    }
  }

  return result;
}

function entrada(){
 let n=nf.value.trim(), codes=parseCodes(codigos.value), operador=op.value.trim(); if(!n){alert('Informe a NF.');return} if(!operador){alert('Informe o operador.');return} if(!codes.length){alert('Importe o XML ou informe os códigos dos produtos da NF.');return}
 let itens=xmlItems.length?xmlItems.map(x=>({...x,quantity:Number(x.quantity)||0,caixas:Number(x.caixas)||0,qtdPorCaixa:Number(x.qtdPorCaixa)||0,sobra:Number(x.sobra)||0})):codes.map(c=>({code:c,quantity:0,caixas:Math.max(1,Number(qtd.value)||1),qtdPorCaixa:0,sobra:0,name:lookup(c)||'Código não encontrado na base'}));
 if(xmlItems.length){const semQpc=itens.filter(x=>!x.qtdPorCaixa);if(semQpc.length){alert('Entrada bloqueada. Falta quantidade por caixa na planilha para: '+semQpc.map(x=>x.code).join(', '));return}}
 itens=itens.filter(x=>x.caixas>0); const total=itens.reduce((s,x)=>s+x.caixas,0),o=stored().length; if(!total){registrarRelatorioSobras(n,serie.value.trim(),xmlItems,operador);alert('Nenhuma caixa fechada para alocar. As sobras foram registradas no relatório.');return}
 if(o+total>CAP){bloqueio.style.display='block';bloqueio.textContent='Entrada bloqueada: a capacidade do pulmão é 2.802 caixas. Atualmente há '+o+' caixas e esta entrada adicionaria '+total+' caixas.';return}
 const used=new Set(stored().map(b=>b.address)),planos=[];
 for(const item of itens){
   const code=normalCode(item.code);
   const vagasProduto=encontrarVagasParaProduto(code, item.caixas, used);
   if(vagasProduto.length < item.caixas){alert('Produto '+code+': a NF gera '+item.caixas+' caixa(s) fechada(s), mas existem apenas '+vagasProduto.length+' posição(ões) livres no pulmão. Entrada bloqueada.');return}
   planos.push({item,vagas:vagasProduto});
   vagasProduto.forEach(p=>used.add(p.id));
 }
 bloqueio.style.display='none';let totalArmazenado=0;for(const plano of planos){const item=plano.item,pinfo=productInfo([item.code])[0];for(let i=0;i<item.caixas;i++){if(isNaN(seq)) seq=0; seq++;let id='CX-'+String(seq).padStart(6,'0'),p=plano.vagas[i],now=new Date().toISOString();boxes.push({box:id,nf:n,serie:serie.value.trim(),fornecedor:forn.value.trim(),operator:operador,address:p.id,status:'ARMAZENADA',entrada:now,productCodes:[item.code],products:[pinfo],unidadesPorCaixa:item.qtdPorCaixa,origem:'NF_XML'});moves.push({when:now,action:'ENTRADA NF XML — CAIXA FECHADA',box:id,nf:n,address:p.id,operator:operador,productCodes:item.code,productNames:pinfo.name,unidadesPorCaixa:item.qtdPorCaixa});totalArmazenado++}}
 if(xmlItems.length)registrarRelatorioSobras(n,serie.value.trim(),xmlItems,operador);save();alert('NF '+n+' processada. '+totalArmazenado+' caixa(s) fechada(s) alocada(s) em B/C/D/E. As sobras ficaram no relatório.');nf.value='';qtd.value=1;codigos.value='';xmlItems=[];document.getElementById('prodPreview').style.display='none';document.getElementById('sobraPreview').style.display='none';ult();dash();map();renderSobras();
}
function ultCaixa(){
 const el=document.getElementById('ultCaixa'); if(!el)return;
 const a=stored().slice(-20).reverse();
 el.innerHTML=a.length?'<table><tr><th>Caixa</th><th>Código</th><th>Produto</th><th>Endereço</th></tr>'+a.map(b=>`<tr><td>${b.box}</td><td>${(b.productCodes||[]).join(', ')||'-'}</td><td>${(b.products||[]).map(x=>x.name).join('<br>')||'-'}</td><td>${b.address}</td></tr>`).join('')+'</table>':'Nenhuma caixa adicionada.';
}

function encontrarOuCriarPosicaoParaItem(input, usedAddresses) {
  if (!input || typeof input !== 'string') return null;
  const str = input.trim().toUpperCase();
  if (!str) return null;

  const posList = (typeof POS !== 'undefined') ? POS : [];
  const used = usedAddresses || new Set();
  const isOcupado = (id) => used.has(canonicalAddressKey(id)) || used.has(normAddr(id));

  // 1. Padrão completo com Coluna (A-E): RUA 01 - RACK 01 - LINHA 01 - A (opcional sub)
  const m1 = str.match(/^(?:RUA|R)?\s*0*(\d+)\s*[-_/\s]+\s*(?:R|RACK|RCK)?\s*0*(\d+)\s*[-_/\s]+\s*(?:L|LINHA|N|NIVEL|P|POS|POSICAO|ANDAR)?\s*0*(\d+)\s*[-_/\s]+\s*([A-E])(?:\s*[-_/\s]+\s*0*(\d+))?$/i);
  if (m1) {
    const ruaNum = parseInt(m1[1], 10);
    const rack = parseInt(m1[2], 10);
    const linha = parseInt(m1[3], 10);
    const col = m1[4].toUpperCase();
    const sub = m1[5] ? parseInt(m1[5], 10) : null;
    const ruaStr = 'RUA ' + ruaNum;
    const subStr = sub ? '-' + String(sub).padStart(2, '0') : '';
    const idPadrao = 'RUA' + ruaNum + '-R' + String(rack).padStart(2, '0') + '-L' + String(linha).padStart(2, '0') + '-' + col + subStr;

    let p = posList.find(x => x.id === idPadrao || canonicalAddressKey(x.id) === canonicalAddressKey(idPadrao));
    if (p && !isOcupado(p.id)) {
      return p;
    }
    if (!p) {
      const novoP = { id: idPadrao, rua: ruaStr, rack, linha, col, material: '', area: '3', obrigatoria: 0 };
      posList.push(novoP);
      salvarPosicaoCustomizada(novoP);
      return novoP;
    }
    // Se a posição exata já estiver ocupada no lote atual, procura coluna livre no mesmo rack e linha
    const cols = (ruaNum === 5 || ruaNum === 7) ? ['B', 'C', 'D', 'E'] : ['A', 'B', 'C', 'D', 'E'];
    for (const altCol of cols) {
      const altId = 'RUA' + ruaNum + '-R' + String(rack).padStart(2, '0') + '-L' + String(linha).padStart(2, '0') + '-' + altCol;
      let altP = posList.find(x => x.id === altId);
      if (!altP) {
        altP = { id: altId, rua: ruaStr, rack, linha, col: altCol, material: '', area: '3', obrigatoria: 0 };
        posList.push(altP);
        salvarPosicaoCustomizada(altP);
      }
      if (!isOcupado(altP.id)) {
        return altP;
      }
    }
    // Se todas as colunas já estiverem ocupadas, cria sub-posição para não mesclar
    let subIdx = 2;
    while (isOcupado(idPadrao + '-' + String(subIdx).padStart(2, '0'))) {
      subIdx++;
    }
    const novoSubId = idPadrao + '-' + String(subIdx).padStart(2, '0');
    const novoSubP = { id: novoSubId, rua: ruaStr, rack, linha, col, material: '', area: '3', obrigatoria: 0 };
    posList.push(novoSubP);
    salvarPosicaoCustomizada(novoSubP);
    return novoSubP;
  }

  // 2. 4 números: 01-01-01-01 (Rua, Rack, Linha, Vaga 1..5)
  const m4 = str.match(/^(?:RUA|R)?\s*0*(\d+)\s*[-_/\s]+\s*(?:R|RACK|RCK)?\s*0*(\d+)\s*[-_/\s]+\s*(?:L|LINHA|N|NIVEL|P|POS|POSICAO|ANDAR)?\s*0*(\d+)\s*[-_/\s]+\s*(?:P|POS|VAGA|COL)?\s*0*(\d+)$/i);
  if (m4) {
    const ruaNum = parseInt(m4[1], 10);
    const rack = parseInt(m4[2], 10);
    const linha = parseInt(m4[3], 10);
    const pNum = parseInt(m4[4], 10);
    const ruaStr = 'RUA ' + ruaNum;
    const col = (ruaNum === 5 || ruaNum === 7) ? (['B','C','D','E','A'][pNum - 1] || 'B') : (['A','B','C','D','E'][pNum - 1] || 'A');
    const idPadrao = 'RUA' + ruaNum + '-R' + String(rack).padStart(2, '0') + '-L' + String(linha).padStart(2, '0') + '-' + col;
    let p = posList.find(x => x.id === idPadrao || canonicalAddressKey(x.id) === canonicalAddressKey(idPadrao));
    if (!p) {
      p = { id: idPadrao, rua: ruaStr, rack, linha, col, material: '', area: '3', obrigatoria: 0 };
      posList.push(p);
      salvarPosicaoCustomizada(p);
    }
    if (!isOcupado(p.id)) return p;
    const cols = (ruaNum === 5 || ruaNum === 7) ? ['B', 'C', 'D', 'E'] : ['A', 'B', 'C', 'D', 'E'];
    for (const altCol of cols) {
      const altId = 'RUA' + ruaNum + '-R' + String(rack).padStart(2, '0') + '-L' + String(linha).padStart(2, '0') + '-' + altCol;
      let altP = posList.find(x => x.id === altId);
      if (!altP) {
        altP = { id: altId, rua: ruaStr, rack, linha, col: altCol, material: '', area: '3', obrigatoria: 0 };
        posList.push(altP);
        salvarPosicaoCustomizada(altP);
      }
      if (!isOcupado(altP.id)) return altP;
    }
    return p;
  }

  // 3. 3 números: 01-01-01 (Rua, Rack, Linha)
  const m3 = str.match(/^(?:RUA|R)?\s*0*(\d+)\s*[-_/\s]+\s*(?:R|RACK|RCK)?\s*0*(\d+)\s*[-_/\s]+\s*(?:L|LINHA|N|NIVEL|P|POS|POSICAO|ANDAR)?\s*0*(\d+)$/i);
  if (m3) {
    const ruaNum = parseInt(m3[1], 10);
    const rack = parseInt(m3[2], 10);
    const linha = parseInt(m3[3], 10);
    const ruaStr = 'RUA ' + ruaNum;
    const cols = (ruaNum === 5 || ruaNum === 7) ? ['B', 'C', 'D', 'E'] : ['A', 'B', 'C', 'D', 'E'];
    for (const c of cols) {
      const id = 'RUA' + ruaNum + '-R' + String(rack).padStart(2, '0') + '-L' + String(linha).padStart(2, '0') + '-' + c;
      let p = posList.find(x => x.id === id);
      if (!p) {
        p = { id, rua: ruaStr, rack, linha, col: c, material: '', area: '3', obrigatoria: 0 };
        posList.push(p);
        salvarPosicaoCustomizada(p);
      }
      if (!isOcupado(p.id)) return p;
    }
    const fallbackId = 'RUA' + ruaNum + '-R' + String(rack).padStart(2, '0') + '-L' + String(linha).padStart(2, '0') + '-B';
    let p = posList.find(x => x.id === fallbackId);
    return p || { id: fallbackId, rua: ruaStr, rack, linha, col: 'B', material: '', area: '3', obrigatoria: 0 };
  }

  // 4. Formato curto com coluna: RUA 5-6B
  const mCurto = str.match(/^(?:RUA|R)?\s*0*(\d+)\s*[-_/\s]*(?:R|RACK)?\s*0*(\d+)\s*[-_/\s]*([A-E])$/i);
  if (mCurto) {
    const ruaNum = parseInt(mCurto[1], 10);
    const rack = parseInt(mCurto[2], 10);
    const col = mCurto[3].toUpperCase();
    const ruaStr = 'RUA ' + ruaNum;
    const candidates = posList.filter(x => x.rua === ruaStr && x.rack === rack && x.col === col);
    if (candidates.length > 0) {
      const free = candidates.find(c => !isOcupado(c.id));
      if (free) return free;
    }
    const maxLinha = Math.max(1, ...candidates.map(x => Number(x.linha) || 1));
    const nextL = maxLinha + 1;
    const id = 'RUA' + ruaNum + '-R' + String(rack).padStart(2, '0') + '-L' + String(nextL).padStart(2, '0') + '-' + col;
    const novoP = { id, rua: ruaStr, rack, linha: nextL, col, material: '', area: '3', obrigatoria: 0 };
    posList.push(novoP);
    salvarPosicaoCustomizada(novoP);
    return novoP;
  }

  // 5. Match direto por ID exato ou chave canônica
  let p = posList.find(x => x.id.toUpperCase() === str || canonicalAddressKey(x.id) === canonicalAddressKey(str));
  if (p && !isOcupado(p.id)) return p;

  // 6. Match sem pontuação
  const cleanStr = str.replace(/[^A-Z0-9]/g, '');
  p = posList.find(x => x.id.replace(/[^A-Z0-9]/g, '') === cleanStr);
  if (p && !isOcupado(p.id)) return p;

  // 7. Novo endereço personalizado garantido no mapa
  const idCustom = str.replace(/[\s/]+/g, '-');
  let pCustom = posList.find(x => x.id === idCustom);
  if (!pCustom) {
    pCustom = { id: idCustom, rua: 'OUTROS', rack: 1, linha: 1, col: 'B', material: '', area: '3', obrigatoria: 0 };
    posList.push(pCustom);
    salvarPosicaoCustomizada(pCustom);
  }
  return pCustom;
}
window.encontrarOuCriarPosicaoParaItem = encontrarOuCriarPosicaoParaItem;

function encontrarPosicaoPorCodigoOuTexto(input) {
  return encontrarOuCriarPosicaoParaItem(input);
}

function preencherSelectEnderecosCaixa() {
  // Desativado a pedido: entrada de endereço por digitação/bipagem ou automático somente, sem sugestões de todos os endereços
  return;
}

function fecharModal(){
  const modal = document.getElementById('modal');
  if(modal) modal.style.display = 'none';
}

function perguntarAgrupamentoOuOutroLugar(code, prodName, qtd, operador, vagasAgrupadas, existingBoxes, originalBarcode){
  const modal = document.getElementById('modal');
  const box = document.getElementById('mb');
  if (!modal || !box) return;

  const barcodeParam = originalBarcode ? `'${esc(originalBarcode)}'` : 'null';
  const exAddr = existingBoxes.map(b => b.address).slice(0, 3).join(', ');
  const sugAddr = vagasAgrupadas.map(p => p.id).join(', ') || 'Sem vagas';

  box.innerHTML = `
    <div style="padding:16px;max-width:540px;margin:0 auto">
      <h3 style="margin-top:0;color:#0f172a;display:flex;align-items:center;gap:8px">
        <span style="font-size:22px">📦</span> Produto já possui caixas no pulmão
      </h3>
      <p style="font-size:13px;color:#334155;line-height:1.5">
        O produto <b>${code}</b> (${esc(prodName)}) já tem <b>${existingBoxes.length} caixa(s)</b> alocada(s) no pulmão (ex.: <code>${esc(exAddr)}</code>).
      </p>

      <div style="background:#f8fafc;border:1px solid #e2e8f0;padding:12px;border-radius:6px;margin:12px 0">
        <div style="font-size:13px;font-weight:bold;color:#0f172a;margin-bottom:4px">Como deseja alocar a(s) nova(s) ${qtd} caixa(s)?</div>
        <div style="font-size:12px;color:#64748b">
          Escolha se prefere manter o agrupamento inteligente ou digitar/ler o código de barras de outro endereço.
        </div>
      </div>

      <div id="modalBtnsOpcoes" style="display:flex;flex-direction:column;gap:10px">
        <button onclick="confirmarAgrupamentoModal('${code}', ${qtd}, '${esc(operador)}', ${barcodeParam})" style="background:#10b981;color:#fff;border:none;padding:12px;border-radius:6px;cursor:pointer;font-weight:600;font-size:13px;text-align:left;display:flex;align-items:center;gap:10px">
          <span style="font-size:20px">📍</span>
          <div>
            <div>Agrupar com caixas existentes (Recomendado)</div>
            <div style="font-size:11px;font-weight:normal;opacity:0.9">Endereço sugerido: <b>${esc(sugAddr)}</b></div>
          </div>
        </button>

        <button onclick="abrirSeletorModal('${code}', ${qtd}, '${esc(operador)}', ${barcodeParam})" style="background:#0284c7;color:#fff;border:none;padding:12px;border-radius:6px;cursor:pointer;font-weight:600;font-size:13px;text-align:left;display:flex;align-items:center;gap:10px">
          <span style="font-size:20px">📌</span>
          <div>
            <div>Digitar / Ler código de barras de outro endereço</div>
            <div style="font-size:11px;font-weight:normal;opacity:0.9">Informe a posição ou bip a etiqueta (ex.: RUA5-6B)</div>
          </div>
        </button>

        <button class="gray" onclick="fecharModal()" style="margin-top:4px">Cancelar</button>
      </div>

      <div id="modalSeletorContainer" style="display:none;margin-top:12px;flex-direction:column;gap:10px">
        <label style="font-size:12px;font-weight:bold;color:#1e293b">Digite ou bip o código de barras do endereço:</label>
        <input id="modalInputPosicao" placeholder="Ex.: RUA5-6B ou RUA5-R01-L06-B" style="width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:6px;font-size:13px" autocomplete="off">
        <div id="modalPosicaoError" style="color:#ef4444;font-size:12px;display:none"></div>
        <div style="display:flex;gap:8px;margin-top:6px">
          <button class="gray" onclick="voltarBtnsModal()">Voltar</button>
          <button style="background:#0284c7;color:#fff;flex:1" onclick="confirmarOutroLugarModal('${code}', ${qtd}, '${esc(operador)}', ${barcodeParam})">Confirmar Alocação</button>
        </div>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
}

function confirmarAgrupamentoModal(code, qtd, operador, originalBarcode){
  fecharModal();
  const used = new Set(stored().map(b => b.address));
  const vagas = encontrarVagasParaProduto(code, qtd, used);
  executarAlocacaoCaixas(code, qtd, operador, vagas, originalBarcode);
}

function abrirSeletorModal(code, qtd, operador, originalBarcode){
  const btns = document.getElementById('modalBtnsOpcoes');
  const container = document.getElementById('modalSeletorContainer');
  const inp = document.getElementById('modalInputPosicao');
  if(btns) btns.style.display = 'none';
  if(container) container.style.display = 'flex';
  if(inp) inp.focus();
}

function voltarBtnsModal(){
  const btns = document.getElementById('modalBtnsOpcoes');
  const container = document.getElementById('modalSeletorContainer');
  if(btns) btns.style.display = 'flex';
  if(container) container.style.display = 'none';
}

function confirmarOutroLugarModal(code, qtd, operador, originalBarcode){
  const inp = document.getElementById('modalInputPosicao');
  const errDiv = document.getElementById('modalPosicaoError');
  const rawAddr = inp ? inp.value.trim() : '';
  if(!rawAddr) {
    if(errDiv) { errDiv.style.display='block'; errDiv.textContent='Informe ou bipe um endereço válido.'; }
    return;
  }
  const p = encontrarPosicaoPorCodigoOuTexto(rawAddr);
  if(!p) {
    if(errDiv) { errDiv.style.display='block'; errDiv.textContent='Endereço ou código de barras "'+rawAddr+'" não foi reconhecido.'; }
    return;
  }
  const used = new Set(stored().map(b => b.address));
  if(used.has(p.id)) {
    if(errDiv) { errDiv.style.display='block'; errDiv.textContent='A posição '+p.id+' já está OCUPADA.'; }
    return;
  }
  fecharModal();
  executarAlocacaoCaixas(code, qtd, operador, [p], originalBarcode);
}

function executarAlocacaoCaixas(code, qtd, operador, vagasDefinidas, originalBarcode){
  const msg=document.getElementById('produtoCaixaInfo');
  const used=new Set(stored().map(b=>b.address));
  let finalVagas = vagasDefinidas;

  if (!finalVagas || finalVagas.length < qtd) {
    finalVagas = encontrarVagasParaProduto(code, qtd, used);
  }

  if(!finalVagas || finalVagas.length < qtd){
    if(msg) {
      msg.style.display='block';
      msg.textContent='Não há posições livres suficientes no pulmão para alocar '+qtd+' caixa(s).';
    }
    return;
  }

  const codigo_barras = originalBarcode || code;
  const codigo_produto = code;
  const prod=lookup(codigo_produto);
  const product={code:codigo_produto,name:prod,family:family(prod)};
  const now=new Date().toISOString();
  const ids=[];
  const newBoxesCreated=[];
  for(let i=0;i<qtd;i++){
    if(isNaN(seq)) seq=0; seq++;
    const boxId='CX-'+String(seq).padStart(6,'0');
    const pos=finalVagas[i];
    const newB={box:boxId,barcode:codigo_barras,nf:'—',serie:'',fornecedor:'',operator:operador,address:pos.id,status:'ARMAZENADA',entrada:now,productCodes:[codigo_produto],products:[product],unidadesPorCaixa:getQtdPorCaixa(codigo_produto),addedBy:operador,addedAt:now};
    boxes.push(newB);
    newBoxesCreated.push(newB);
    moves.push({when:now,action:'ENTRADA POR CÓDIGO DO PRODUTO',box:boxId,barcode:codigo_barras,nf:'—',address:pos.id,operator:operador,productCodes:codigo_produto,productNames:prod});
    ids.push(boxId);
  }
  save();
  if (typeof window.syncAddBoxesToSupabase === 'function') window.syncAddBoxesToSupabase(newBoxesCreated);
  if(msg) {
    msg.style.display='block';
    msg.textContent=qtd+' caixa(s) adicionada(s) para '+codigo_produto+' — '+prod+' | Posição: '+finalVagas.map(p=>p.id).join(', ')+' | Operador: '+operador+' | Caixas: '+ids.join(', ');
  }
  const codeInp = document.getElementById('codigoProdutoCaixa');
  const qtdInp = document.getElementById('qtdCaixasCaixa');
  const endInp = document.getElementById('enderecoCaixaInput');
  const infoEl = document.getElementById('enderecoCadastradoInfo');
  if(codeInp) codeInp.value='';
  if(qtdInp) qtdInp.value=1;
  if(endInp) { endInp.value=''; endInp.placeholder='Endereço / Cód. Barras (ex.: RUA5-6B ou em branco para Automático)'; }
  if(infoEl) infoEl.style.display='none';
  preencherSelectEnderecosCaixa();
  ultCaixa();if(typeof ult==='function')ult();dash();map();if(typeof buscarProduto==='function')buscarProduto();
}

function aoDigitarCodigoProdutoCaixa(rawVal) {
  const infoEl = document.getElementById('enderecoCadastradoInfo');
  const txtEl = document.getElementById('txtEnderecoCadastrado');
  const inputEnd = document.getElementById('enderecoCaixaInput');
  if (!rawVal || !rawVal.trim()) {
    if (infoEl) infoEl.style.display = 'none';
    if (inputEnd) inputEnd.placeholder = 'Endereço / Cód. Barras (ex.: RUA5-6B ou em branco para Automático)';
    return;
  }
  const info = extrairCodigoProduto(rawVal);
  if (!info.valido) {
    if (infoEl) infoEl.style.display = 'none';
    return;
  }
  const code = info.codigo_produto;
  const endCadastrado = typeof window.obterEnderecoPulmaoProduto === 'function' ? window.obterEnderecoPulmaoProduto(code) : '';
  const prodName = lookup(code);
  const qpc = typeof getQtdPorCaixa === 'function' ? getQtdPorCaixa(code) : 0;

  if (endCadastrado) {
    if (infoEl) {
      infoEl.style.display = 'block';
      if (txtEl) txtEl.textContent = endCadastrado + (prodName && !prodName.startsWith('Código não') ? ' — ' + prodName + (qpc ? ' (' + qpc + ' un/cx)' : '') : '');
    }
    if (inputEnd && !inputEnd.value.trim()) {
      inputEnd.placeholder = 'Sugerido: ' + endCadastrado + ' (ou digite outro)';
    }
  } else if (prodName && !prodName.startsWith('Código não')) {
    if (infoEl) {
      infoEl.style.display = 'block';
      if (txtEl) txtEl.innerHTML = '<span style="color:#d97706">Sem endereço fixo cadastrado</span> — ' + esc(prodName) + (qpc ? ' (' + qpc + ' un/cx)' : '');
    }
  } else {
    if (infoEl) infoEl.style.display = 'none';
  }
}

function aplicarEnderecoCadastrado() {
  const rawInput = document.getElementById('codigoProdutoCaixa').value;
  const info = extrairCodigoProduto(rawInput);
  if (!info.valido) return;
  const endCadastrado = typeof window.obterEnderecoPulmaoProduto === 'function' ? window.obterEnderecoPulmaoProduto(info.codigo_produto) : '';
  if (endCadastrado) {
    const inputEnd = document.getElementById('enderecoCaixaInput');
    if (inputEnd) inputEnd.value = endCadastrado;
  }
}

function adicionarCaixasPorProduto(){
  const rawInput = document.getElementById('codigoProdutoCaixa').value;
  const info = extrairCodigoProduto(rawInput);
  const msg = document.getElementById('produtoCaixaInfo');
  
  if (!info.valido) {
    msg.style.display = 'block';
    msg.textContent = info.erro || 'Código de barras inválido.';
    return;
  }

  const codigo_barras = info.codigo_barras;
  const code = info.codigo_produto;
  const qtd = Math.max(1, parseInt(document.getElementById('qtdCaixasCaixa').value, 10) || 0);
  const operador = document.getElementById('operadorCaixa').value.trim();
  const inpEnd = document.getElementById('enderecoCaixaInput') || document.getElementById('enderecoCaixaSelect');
  const rawEndereco = inpEnd ? inpEnd.value.trim() : '';

  if (!operador) {
    msg.style.display = 'block';
    msg.textContent = 'Informe o nome do operador que está adicionando as caixas.';
    return;
  }
  
  const prod = lookup(code);
  if (!prod || prod.startsWith('Código não encontrado')) {
    msg.style.display = 'block';
    msg.textContent = `Código de produto "${code}" (extraído do código de barras "${codigo_barras}") não foi encontrado no cadastro.`;
    return;
  }

  const used = new Set(stored().map(b => b.address));

  if (rawEndereco) {
    const targetP = encontrarPosicaoPorCodigoOuTexto(rawEndereco);
    if (!targetP) {
      msg.style.display = 'block';
      msg.textContent = 'Código de barras ou endereço "' + rawEndereco + '" não foi reconhecido no pulmão.';
      return;
    }
    if (used.has(targetP.id)) {
      msg.style.display = 'block';
      msg.textContent = 'A posição ' + targetP.id + ' já está OCUPADA no pulmão.';
      return;
    }
    executarAlocacaoCaixas(code, qtd, operador, [targetP], codigo_barras);
    return;
  }

  // Se nenhum endereço digitado manualmente e é 1 caixa, verifica endereço mestre cadastrado
  const endCadastrado = typeof window.obterEnderecoPulmaoProduto === 'function' ? window.obterEnderecoPulmaoProduto(code) : '';
  if (endCadastrado && qtd === 1) {
    const targetP = encontrarPosicaoPorCodigoOuTexto(endCadastrado);
    if (targetP && !used.has(targetP.id)) {
      executarAlocacaoCaixas(code, qtd, operador, [targetP], codigo_barras);
      return;
    }
  }

  const existingBoxes = stored().filter(b => (b.productCodes || []).map(normalCode).includes(code));
  const vagasAgrupadas = encontrarVagasParaProduto(code, qtd, used);

  if (existingBoxes.length > 0) {
    perguntarAgrupamentoOuOutroLugar(code, prod, qtd, operador, vagasAgrupadas, existingBoxes, codigo_barras);
    return;
  }

  if (vagasAgrupadas.length < qtd) {
    msg.style.display = 'block';
    msg.textContent = 'Não há posições livres suficientes no pulmão para alocar ' + qtd + ' caixa(s). Vagas disponíveis: ' + vagasAgrupadas.length + '.';
    return;
  }

  executarAlocacaoCaixas(code, qtd, operador, vagasAgrupadas, codigo_barras);
}

function adicionarCaixaPorProduto(){adicionarCaixasPorProduto()}
function retirarCaixasPorProduto(){ /* desativada: retirada somente pelo Mapa do Pulmão */ }
function retirarPorCodigoNoMapa(){
  const rawInput = document.getElementById('codigoRetiradaMapa').value.trim();
  const operador = document.getElementById('operadorRetiradaMapa').value.trim();
  const msg = document.getElementById('retiradaMapaInfo');
  msg.style.display = 'block';

  if (!rawInput) {
    msg.textContent = 'Digite ou bipe o código de barras do produto ou ID da caixa.';
    return;
  }
  if (!operador) {
    msg.textContent = 'Digite o nome do operador.';
    return;
  }

  let codigo_barras = rawInput;
  let codigo_produto = rawInput;

  const isBoxId = /^CX-|^EST-/i.test(rawInput);

  if (!isBoxId) {
    const info = extrairCodigoProduto(rawInput);
    if (!info.valido) {
      msg.textContent = info.erro || 'Código de barras inválido.';
      return;
    }
    codigo_barras = info.codigo_barras;
    codigo_produto = info.codigo_produto;
  }

  const candidates = stored().filter(b => {
    if (isBoxId) return b.box.toLowerCase() === rawInput.toLowerCase();
    return (b.productCodes || []).map(normalCode).includes(codigo_produto) ||
           (b.barcode && b.barcode === codigo_barras);
  });

  if (!candidates.length) {
    const endCadastrado = typeof window.obterEnderecoPulmaoProduto === 'function' ? window.obterEnderecoPulmaoProduto(codigo_produto) : '';
    const prodDesc = lookup(codigo_produto);
    if (endCadastrado || (prodDesc && !prodDesc.startsWith('Código ' + codigo_produto) && !prodDesc.startsWith('Código não'))) {
      msg.innerHTML = `⚠️ <b>Nenhuma caixa física deste produto está atualmente no pulmão (Estoque = 0 caixas).</b><br>` +
        `Produto: <b>${esc(codigo_produto)}</b> — ${esc(prodDesc || 'Não cadastrado')}<br>` +
        (endCadastrado ? `📍 <b>Endereço fixo no Pulmão:</b> <span style="color:#2563eb;font-weight:bold">${esc(endCadastrado)}</span>` : '<span class="small" style="color:#64748b">Sem endereço fixo cadastrado para este SKU.</span>');
    } else {
      msg.textContent = 'Caixa ou produto com código "' + codigo_produto + '" não foi encontrado no pulmão. Confira o código.';
    }
    return;
  }

  const b = candidates[0];
  const produto = (b.products || []).find(x => normalCode(x.code) === codigo_produto) || (b.products && b.products[0]) || {};
  const endCadastrado = typeof window.obterEnderecoPulmaoProduto === 'function' ? window.obterEnderecoPulmaoProduto(produto.code || codigo_produto) : '';

  msg.innerHTML = '<b>✓ Caixa física encontrada no pulmão!</b><br>Caixa: <b>' + esc(b.box) + '</b>' +
    '<br>Código Produto: <b>' + esc(produto.code || codigo_produto) + '</b>' +
    (b.barcode && b.barcode !== codigo_produto ? '<br>Código de Barras Original: <code>' + esc(b.barcode) + '</code>' : '') +
    '<br>Produto: ' + esc(produto?.name || lookup(codigo_produto) || '-') +
    '<br>📍 <b>Posição Atual no Pulmão: <span style="color:#059669;font-weight:bold">' + esc(b.address) + '</span></b>' +
    (endCadastrado && endCadastrado !== b.address ? '<br><span class="small" style="color:#64748b">Endereço mestre de cadastro: ' + esc(endCadastrado) + '</span>' : '') +
    '<br><br>' +
    '<button class="red" onclick="confirmarRetiradaMapa(\'' + esc(b.box) + '\')">Confirmar retirada da caixa</button> ' +
    '<button class="gray" onclick="document.getElementById(\'retiradaMapaInfo\').style.display=\'none\'">Cancelar</button>';
}
async function confirmarRetiradaMapa(boxId){
  const msg=document.getElementById('retiradaMapaInfo');
  const b=boxes.find(x=>x.box===boxId && x.status==='ARMAZENADA');
  if(!b){
    if(msg){ msg.style.display='block'; msg.innerHTML='<span style="color:#ef4444;font-weight:bold">Erro:</span> Caixa não encontrada no pulmão (pode já ter sido retirada por outro operador).'; }
    return;
  }
  const operador=document.getElementById('operadorRetiradaMapa').value.trim();
  if(!operador){
    if(msg){ msg.style.display='block'; msg.innerHTML='<span style="color:#ef4444;font-weight:bold">Erro:</span> Informe o nome do operador para confirmar a retirada.'; }
    return;
  }

  if(msg){
    msg.style.display='block';
    msg.innerHTML='⏳ <i>Processando retirada no banco de dados... Por favor, aguarde.</i>';
  }

  let dbOk = true;
  let dbErr = '';
  if(typeof window.syncRemoveBoxFromSupabase === 'function' && window.supabaseClient){
    const res = await window.syncRemoveBoxFromSupabase(b.address);
    if(!res || !res.success){
      dbOk = false;
      dbErr = res?.error || 'Falha de comunicação com o banco de dados Supabase.';
    }
  }

  if(!dbOk){
    if(msg){
      msg.style.display='block';
      msg.innerHTML='<span style="color:#ef4444;font-weight:bold">❌ Erro na retirada (banco de dados):</span> '+esc(dbErr)+'<br><small>A caixa permanece alocada no mapa no endereço '+esc(b.address)+'.</small>';
    }
    return;
  }

  const now=new Date().toISOString();
  b.status='RETIRADA';
  b.removedBy=operador;
  b.removedAt=now;
  moves.push({when:now,action:'RETIRADA PELO MAPA — CÓDIGO DO PRODUTO',box:b.box,nf:b.nf,address:b.address,operator:operador,productCodes:(b.productCodes||[]).join(','),productNames:(b.products||[]).map(x=>x.name).join(' | ')});
  save();

  document.getElementById('codigoRetiradaMapa').value='';
  document.getElementById('operadorRetiradaMapa').value='';
  if(msg){
    msg.style.display='block';
    msg.innerHTML='<b>✓ Retirada confirmada no banco com sucesso.</b> Caixa '+esc(b.box)+' — código '+esc((b.productCodes||[]).join(', '))+' — endereço '+esc(b.address);
  }

  ultCaixa();if(typeof ult==='function')ult();dash();map();if(typeof buscarProduto==='function')buscarProduto();
}
function normAddr(v){return String(v||'').trim().toUpperCase().replace(/\s+/g,'')}
function atualizarSelectRuas() {
  const sel = document.getElementById('rua');
  if (!sel) return;
  const valAtual = sel.value;
  const posList = (typeof POS !== 'undefined') ? POS : [];
  const ruasUnicas = [...new Set(posList.map(p => p.rua).filter(r => r && r !== 'PALETE'))].sort((a,b) => a.localeCompare(b, undefined, { numeric: true }));
  const ruas = ['TODAS', ...ruasUnicas];
  const optionsHtml = ruas.map(r => `<option value="${esc(r)}">${esc(r)}</option>`).join('');
  if (sel.innerHTML !== optionsHtml) {
    sel.innerHTML = optionsHtml;
    if (ruas.includes(valAtual)) {
      sel.value = valAtual;
    } else {
      sel.value = 'TODAS';
    }
  }
  if (!sel.value || !ruas.includes(sel.value)) sel.value = 'TODAS';
}
function map(){
  if (typeof garantirPosicoesParaEnderecos === 'function') garantirPosicoesParaEnderecos();
  atualizarSelectRuas();
  const posList = (typeof window !== 'undefined' && window.POS) ? window.POS : (typeof POS !== 'undefined' ? POS : []);
  const CAPACIDADE = posList.length;
  const ruaEl = document.getElementById('rua');
  const buscaEl = document.getElementById('busca');
  let r = (ruaEl && ruaEl.value && ruaEl.value.trim()) ? ruaEl.value.trim() : 'TODAS';
  let q = String(buscaEl ? buscaEl.value : '').trim().toLowerCase();
  let storedBoxes = stored();

  const occupiedByAddress = new Map();
  storedBoxes.forEach(b => {
    if (b.status === 'ARMAZENADA') {
      const k1 = canonicalAddressKey(b.address);
      const k2 = normAddr(b.address);
      if (k1) occupiedByAddress.set(k1, b);
      if (k2) occupiedByAddress.set(k2, b);
    }
  });

  let arr = posList.filter(p => p.rua !== 'PALETE' && ['A','B','C','D','E'].includes(p.col))
                   .filter(p => (r === 'TODAS' || p.rua === r) && 
                     (!q || p.id.toLowerCase().includes(q) || storedBoxes.some(b => (canonicalAddressKey(b.address) === canonicalAddressKey(p.id) || normAddr(b.address) === normAddr(p.id)) && (
                       String(b.box || '').toLowerCase().includes(q) || 
                       String(b.nf || '').toLowerCase().includes(q) || 
                       (b.products || []).some(x => String(x.code || '').toLowerCase().includes(q) || String(x.name || '').toLowerCase().includes(q) || String(x.family || '').toLowerCase().includes(q))
                     ))));

  const ocupadosSet = new Set(storedBoxes.map(b => canonicalAddressKey(b.address) || normAddr(b.address)).filter(Boolean));
  let ocupados = Math.min(CAPACIDADE, ocupadosSet.size);
  let livres = Math.max(0, CAPACIDADE - ocupados);
  let perc = CAPACIDADE ? Math.min(100, (ocupados / CAPACIDADE) * 100) : 0;

  const pm = document.getElementById('percMapa');
  const rm = document.getElementById('resumoMapa');
  const vm = document.getElementById('vagasMapa');
  if(pm) pm.textContent = perc.toFixed(1).replace('.', ',') + '%';
  if(rm) rm.textContent = ocupados.toLocaleString('pt-BR') + ' de ' + CAPACIDADE.toLocaleString('pt-BR') + ' caixas';
  if(vm) vm.textContent = livres.toLocaleString('pt-BR') + ' vagas livres';

  let g = {};
  arr.forEach(p => {
    g[p.rua] = g[p.rua] || {};
    g[p.rua][p.rack] = g[p.rua][p.rack] || [];
    g[p.rua][p.rack].push(p);
  });

  let out = '';
  for (let rr of Object.keys(g)) {
    out += `<div class="map"><h2 style="margin-bottom:12px">${rr}</h2><div class="rack-grid">`;
    for (let rk of Object.keys(g[rr]).sort((a, b) => Number(a) - Number(b))) {
      let a = g[rr][rk];
      let occupiedRackCount = a.filter(p => occupiedByAddress.has(canonicalAddressKey(p.id)) || occupiedByAddress.has(normAddr(p.id))).length;
      
      out += `<div class="rack-card">`;
      out += `<div class="rack-title"><h3>Rack ${String(rk).padStart(2, '0')}</h3><span class="rack-badge">${occupiedRackCount} ocupada(s) / ${a.length} vagas</span></div>`;
      out += `<div class="columns-container">`;

      const maxLinha = Math.max(21, ...a.map(x => Number(x.linha) || 1));
      
      for (let col of ['A', 'B', 'C', 'D', 'E']) {
        const isColADisabled = (col === 'A' && (rr === 'RUA 5' || rr === 'RUA 7'));
        out += `<div class="column-block">`;
        out += `<div class="column-header ${isColADisabled ? 'disabled-col' : ''}">${col}${isColADisabled ? ' (Montagem)' : ''}</div>`;
        out += `<div class="column-stack">`;
        
        for (let l = maxLinha; l >= 1; l--) {
          let p = a.find(x => Number(x.linha) === l && x.col === col);
          if (!p) continue;
          let b = occupiedByAddress.get(canonicalAddressKey(p.id)) || occupiedByAddress.get(normAddr(p.id));
          if (b) {
            out += `<div class="cell-vertical occ" onclick="det('${p.id}')">`;
            out += `<span class="cell-level">P${String(l).padStart(2,'0')}</span>`;
            out += `<span class="cell-status">${esc(b.products && b.products[0] ? b.products[0].family : b.box)}</span>`;
            out += `</div>`;
          } else if (isColADisabled) {
            out += `<div class="cell-vertical disabled" title="Coluna A com caixas para montagem"><span class="cell-level">P${String(l).padStart(2,'0')}</span><span class="cell-status">MONT</span></div>`;
          } else {
            out += `<div class="cell-vertical" onclick="det('${p.id}')">`;
            out += `<span class="cell-level">P${String(l).padStart(2,'0')}</span>`;
            out += `<span class="cell-status">LIVRE</span>`;
            out += `</div>`;
          }
        }
        
        out += `</div></div>`;
      }
      
      out += `</div></div>`;
    }
    out += `</div></div>`;
  }

  const mapaEl = document.getElementById('mapa');
  if (mapaEl) mapaEl.innerHTML = out || '<div class="card">Nenhuma posição encontrada.</div>';
}

function closeM(){
  const modal = document.getElementById('modal');
  if (modal) {
    modal.classList.remove('open');
    modal.style.display = 'none';
  }
}
window.closeM = closeM;
window.fecharModal = closeM;

function det(id){
  if (typeof garantirPosicoesParaEnderecos === 'function') garantirPosicoesParaEnderecos();
  let p = POS.find(x => canonicalAddressKey(x.id) === canonicalAddressKey(id) || normAddr(x.id) === normAddr(id));
  let b = stored().find(x => canonicalAddressKey(x.address) === canonicalAddressKey(id) || normAddr(x.address) === normAddr(id));
  if (!p && b) {
    p = { id, rua: '', rack: '', linha: '', col: '' };
  }
  if (!p) return;
  const mb = document.getElementById('mb');
  const modal = document.getElementById('modal');
  if (!mb || !modal) return;

  mb.innerHTML = `<h2>${esc(id)}</h2><p class="small">${esc(p.rua || '')} • Rack ${esc(p.rack || '')} • Linha ${esc(p.linha || '')} • Repartição ${esc(p.col || '')}</p>` + (b ? `
    <p><b>Status:</b> <span style="color:#b91c1c;font-weight:800">OCUPADA</span></p>
    <p><b>Caixa:</b> ${esc(b.box)}</p>
    <p><b>NF:</b> ${esc(b.nf)}</p>
    <p><b>Fornecedor:</b> ${esc(b.fornecedor||'-')}</p>
    <p><b>Adicionada por:</b> ${esc(b.addedBy||b.operator||'-')}</p>
    <hr>
    <p><b>Produtos da caixa:</b></p>
    <ul>${(b.products||[]).map(x=>`<li><b>${esc(x.code)}</b> — ${esc(x.name)} <span class="small">[${esc(x.family)}]</span></li>`).join('')||'<li>Sem produtos cadastrados</li>'}</ul>
    <div class="toolbar" style="margin-top:16px;gap:8px">
      <button class="red" onclick="ret('${esc(b.box)}')">🗑️ Retirar esta caixa</button>
      <button type="button" class="gray" onclick="closeM()">Voltar / Fechar</button>
    </div>` : `
    <p>🟩 Posição livre.</p>
    <div class="toolbar" style="margin-top:16px">
      <button type="button" class="gray" onclick="closeM()">Fechar</button>
    </div>`);

  modal.classList.add('open');
  modal.style.display = 'flex';
}
function buscarProduto(){
  let q=document.getElementById('produtoBusca').value.trim().toLowerCase(),el=document.getElementById('produtoResultado');
  if(!q){el.innerHTML='';return}
  let found=[];
  for(const [code,name] of Object.entries(PRODUTOS)){
    if(code.includes(q)||name.toLowerCase().includes(q)){
      found.push({code,name});
      if(found.length>=30)break;
    }
  }
  let storedHits=stored().filter(b=>(b.products||[]).some(x=>x.code.includes(q)||x.name.toLowerCase().includes(q)||x.family.toLowerCase().includes(q)));
  const totalCaixas=storedHits.length;
  const resumo=found.map(x=>{
    const n=stored().filter(b=>(b.products||[]).some(p=>p.code===x.code)).length;
    return {x,n};
  });

  el.innerHTML='<p class="small">'+found.length+' produto(s) encontrados na base. '+totalCaixas+' caixa(s) física(s) em estoque.</p>'+
    (found.length?'<table><tr><th>Código</th><th>Descrição</th><th>Linha</th><th>Endereço Pulmão</th><th>Caixas em Estoque</th></tr>'+
      resumo.map(({x,n})=>{
        const end=(typeof window.obterEnderecoPulmaoProduto==='function')?window.obterEnderecoPulmaoProduto(x.code):'';
        const endBadge=end?`<span class="badge-status valido">${esc(end)}</span>`:'<span class="small" style="color:#94a3b8">—</span>';
        return `<tr><td><b>${esc(x.code)}</b></td><td>${esc(x.name)}</td><td>${esc(family(x.name))}</td><td>${endBadge}</td><td><b>${n}</b></td></tr>`;
      }).join('')+'</table>':'<div class="notice">Nenhum produto encontrado.</div>')+
    (storedHits.length?'<h3>Caixas físicas armazenadas</h3><table><tr><th>Caixa</th><th>NF</th><th>Produto</th><th>Endereço Atual</th></tr>'+
      storedHits.map(b=>`<tr><td>${esc(b.box)}</td><td>${esc(b.nf)}</td><td>${(b.products||[]).filter(x=>x.code.includes(q)||x.name.toLowerCase().includes(q)||x.family.toLowerCase().includes(q)).map(x=>esc(x.code)+' — '+esc(x.name)).join('<br>')}</td><td><b>${esc(b.address)}</b></td></tr>`).join('')+'</table>':'');
}
function limparProduto(){document.getElementById('produtoBusca').value='';document.getElementById('produtoResultado').innerHTML=''}
async function ret(id){
  let b=boxes.find(x=>x.box===id && x.status==='ARMAZENADA');
  if(!b) {
    alert('Esta caixa não está mais alocada no pulmão (pode ter sido retirada por outro operador).');
    closeM();
    map();
    return;
  }
  const opInput = document.getElementById('operadorRetiradaMapa');
  let operador = opInput ? opInput.value.trim() : '';
  if(!operador) {
    operador = prompt('Informe o nome do operador para confirmar a retirada da caixa '+b.box+' (Endereço: '+b.address+'):','');
  }
  if(!operador || !operador.trim()) return;
  operador = operador.trim();

  let dbOk = true;
  let dbErr = '';
  if(typeof window.syncRemoveBoxFromSupabase === 'function' && window.supabaseClient){
    const res = await window.syncRemoveBoxFromSupabase(b.address);
    if(!res || !res.success){
      dbOk = false;
      dbErr = res?.error || 'Erro de comunicação com o Supabase.';
    }
  }

  if(!dbOk){
    alert('❌ Erro ao processar retirada no banco de dados:\n' + dbErr + '\nA caixa permanece alocada no mapa.');
    return;
  }

  const now=new Date().toISOString();
  b.status='RETIRADA';
  b.removedBy=operador;
  b.removedAt=now;
  moves.push({when:now,action:'RETIRADA PELO MAPA',box:b.box,nf:b.nf,address:b.address,operator:operador,productCodes:(b.productCodes||[]).join(','),productNames:(b.products||[]).map(x=>x.name).join(' | ')});
  save();
  closeM();
  map();
  dash();
  if(typeof ult==='function') ult();
  if(typeof ultCaixa==='function') ultCaixa();
  if(typeof buscarProduto==='function') buscarProduto();
}
function mov(){
  const msEl = document.getElementById('ms');
  const mtEl = document.getElementById('mt');
  if (!mtEl) return;
  const q = String(msEl ? msEl.value : '').toLowerCase();
  const a = [...moves].reverse().filter(x => Object.values(x).join(' ').toLowerCase().includes(q));
  mtEl.innerHTML = '<table><tr><th>Data</th><th>Ação</th><th>Caixa</th><th>NF</th><th>Endereço</th><th>Produtos</th><th>Operador</th></tr>' + a.map(x => `<tr><td>${new Date(x.when).toLocaleString('pt-BR')}</td><td>${x.action}</td><td>${x.box}</td><td>${x.nf}</td><td>${x.address}</td><td>${x.productNames||'-'}</td><td>${x.operator||'-'}</td></tr>`).join('') + '</table>';
}
function csv(){let rows=[['Data','Ação','Caixa','NF','Endereço','Códigos','Produtos','Operador'],...moves.map(x=>[x.when,x.action,x.box,x.nf,x.address,x.productCodes||'',x.productNames||'',x.operator||''])];let s=rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(';')).join('\n');let a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff'+s],{type:'text/csv;charset=utf-8'}));a.download='pulmao_movimentacoes.csv';a.click()}
function normalizarCabecalho(v){return String(v??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'')}
function valorColuna(row,possiveis){const mapa={};Object.keys(row).forEach(k=>mapa[normalizarCabecalho(k)]=row[k]);for(const p of possiveis){const v=mapa[normalizarCabecalho(p)];if(v!==undefined&&v!==null&&String(v).trim()!=='')return v}return ''}
// ==========================================
// IMPORTAÇÃO DE ENDEREÇAMENTO DO PULMÃO (WIZARD)
// ==========================================

let _linhasPlanilhaPulmaoCarregadas = [];
let _itensValidosParaImportar = [];
window._getItensValidosParaImportar = () => _itensValidosParaImportar;
window._setItensValidosParaImportar = (val) => { _itensValidosParaImportar = val; };

function normalizarCodigoPlanilha(val) {
  if (val === undefined || val === null) return '';
  let str = String(val).trim();
  str = str.replace(/\.0+$/, ''); // Remove .0 de números float vindos do Excel
  const digits = str.replace(/\D/g, '');
  if (digits.length > 0 && digits.length <= 4) {
    return digits.padStart(5, '0');
  }
  if (/^\d+$/.test(str)) {
    return str;
  }
  return str.toUpperCase();
}

function normalizarEnderecoPlanilha(val) {
  if (!val) return '';
  return String(val).trim().toUpperCase().replace(/\s+/g, ' ');
}

async function lerPlanilhaParaLinhas(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  if (ext === 'csv') {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function(e) {
        try {
          const text = e.target.result;
          const firstLines = text.split(/\r?\n/).slice(0, 5).join('\n');
          const countPontoVirgula = (firstLines.match(/;/g) || []).length;
          const countVirgula = (firstLines.match(/,/g) || []).length;
          const countTab = (firstLines.match(/\t/g) || []).length;

          let sep = ',';
          if (countPontoVirgula > countVirgula && countPontoVirgula > countTab) sep = ';';
          else if (countTab > countVirgula) sep = '\t';

          const wb = XLSX.read(text, { type: 'string', raw: false, FS: sep });
          const sheetName = wb.SheetNames[0];
          const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { defval: '', raw: false });
          resolve(rows);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = reject;
      reader.readAsText(file, 'UTF-8');
    });
  } else {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function(e) {
        try {
          const data = new Uint8Array(e.target.result);
          const wb = XLSX.read(data, { type: 'array', cellDates: false, raw: false });
          let rows = [];
          wb.SheetNames.forEach(name => {
            const sheetRows = XLSX.utils.sheet_to_json(wb.Sheets[name], { defval: '', raw: false });
            if (sheetRows && sheetRows.length > 0) {
              rows = rows.concat(sheetRows);
            }
          });
          resolve(rows);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }
}

async function aoSelecionarPlanilhaPulmao(input) {
  if (input && input.files && input.files[0]) {
    await analisarPlanilhaPulmao();
  }
}

async function analisarPlanilhaPulmao() {
  const input = document.getElementById('planilhaPulmao');
  const file = input?.files?.[0];
  const msg = document.getElementById('resultadoImportacaoPulmao');
  if (!file) {
    alert('Selecione uma planilha Excel (.xlsx, .xls) ou CSV (.csv).');
    return;
  }
  if (typeof XLSX === 'undefined') {
    alert('Biblioteca de leitura de planilhas não carregada. Verifique sua conexão com a internet.');
    return;
  }

  if (msg) {
    msg.style.display = 'block';
    msg.innerHTML = '⏳ <i>Lendo e analisando arquivo... Por favor, aguarde.</i>';
  }

  try {
    const rows = await lerPlanilhaParaLinhas(file);
    if (!rows || rows.length === 0) {
      if (msg) {
        msg.style.display = 'block';
        msg.innerHTML = '<span style="color:#ef4444;font-weight:bold">Aviso:</span> O arquivo selecionado está vazio ou não contém dados legíveis.';
      }
      return;
    }

    _linhasPlanilhaPulmaoCarregadas = rows;

    // Detectar todas as colunas disponíveis nas primeiras linhas
    const colunasSet = new Set();
    rows.slice(0, 20).forEach(r => {
      Object.keys(r || {}).forEach(k => {
        const clean = String(k).trim();
        if (clean && !clean.startsWith('__EMPTY')) colunasSet.add(clean);
      });
    });
    const colunas = Array.from(colunasSet);

    if (colunas.length === 0) {
      if (msg) {
        msg.style.display = 'block';
        msg.innerHTML = '<span style="color:#ef4444;font-weight:bold">Erro:</span> Não foi possível identificar as colunas na planilha.';
      }
      return;
    }

    // Preencher os selects de mapeamento
    const selCod = document.getElementById('selectColunaCodigo');
    const selEnd = document.getElementById('selectColunaEndereco');
    if (selCod && selEnd) {
      selCod.innerHTML = colunas.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('');
      selEnd.innerHTML = colunas.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('');

      // Heurística para código do produto
      const candidatosCod = ['codigo material', 'código material', 'codigo do produto', 'código do produto', 'codigo', 'código', 'material', 'produto', 'sku', 'cod', 'item'];
      const codEncontrado = colunas.find(c => {
        const norm = c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return candidatosCod.some(cand => norm.includes(cand));
      });
      if (codEncontrado) selCod.value = codEncontrado;

      // Heurística para endereço
      const candidatosEnd = ['endereco no pulmao', 'endereço no pulmão', 'endereco', 'endereço', 'localizacao', 'localização', 'posicao', 'posição', 'pulmao', 'pulmão', 'address', 'rua', 'rack'];
      const endEncontrado = colunas.find(c => {
        const norm = c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return candidatosEnd.some(cand => norm.includes(cand));
      });
      if (endEncontrado) selEnd.value = endEncontrado;
    }

    const containerMap = document.getElementById('containerMapeamentoColunas');
    if (containerMap) containerMap.style.display = 'block';

    if (msg) msg.style.display = 'none';

    gerarPreviaImportacao();

  } catch (err) {
    console.error('Erro ao ler planilha:', err);
    if (msg) {
      msg.style.display = 'block';
      msg.innerHTML = '<span style="color:#ef4444;font-weight:bold">Erro ao processar arquivo:</span> ' + esc(err.message || 'Formato incompatível.');
    }
  }
}

function gerarPreviaImportacao() {
  const selCod = document.getElementById('selectColunaCodigo');
  const selEnd = document.getElementById('selectColunaEndereco');
  const colCod = selCod ? selCod.value : '';
  const colEnd = selEnd ? selEnd.value : '';

  if (!_linhasPlanilhaPulmaoCarregadas || !_linhasPlanilhaPulmaoCarregadas.length || !colCod || !colEnd) {
    return;
  }

  let totalLinhas = _linhasPlanilhaPulmaoCarregadas.length;
  let validos = 0;
  let naoCadastrados = 0;
  let invalidos = 0;

  const itensParaSalvar = [];
  const amostraTabela = [];

  _linhasPlanilhaPulmaoCarregadas.forEach((row, idx) => {
    const rawCod = row[colCod];
    const rawEnd = row[colEnd];

    const cod = normalizarCodigoPlanilha(rawCod);
    const end = normalizarEnderecoPlanilha(rawEnd);
    const pos = encontrarPosicaoPorCodigoOuTexto(end);

    let statusText = '✓ Válido (Mapa)';
    let statusBadgeClass = 'valido';

    if (!cod || cod === '00000' || !end) {
      statusText = '❌ Incompleto';
      statusBadgeClass = 'erro';
      invalidos++;
    } else {
      const prodName = lookup(cod);
      const existeNoCatalogo = prodName && !prodName.startsWith('Código ' + cod) && !prodName.startsWith('Código não');
      if (!existeNoCatalogo) {
        naoCadastrados++;
        statusText = '⚠️ Não cadastrado';
        statusBadgeClass = 'aviso';
      } else {
        validos++;
      }
      itensParaSalvar.push({ codigo: cod, endereco: end, posId: pos ? pos.id : end });
    }

    if (idx < 10) {
      amostraTabela.push({
        linha: idx + 1,
        codigo: cod || '(vazio)',
        endereco: end || '(vazio)',
        posicaoDetectada: pos ? pos.id : '⚠️ Posição não reconhecida',
        produto: lookup(cod) || '—',
        statusText,
        statusBadgeClass
      });
    }
  });

  _itensValidosParaImportar = itensParaSalvar;

  // Atualizar contadores
  const elTotal = document.getElementById('statTotalLinhas');
  const elVal = document.getElementById('statValidos');
  const elNaoCad = document.getElementById('statNaoCadastrados');
  const elInv = document.getElementById('statInvalidos');

  if (elTotal) elTotal.textContent = totalLinhas.toLocaleString('pt-BR');
  if (elVal) elVal.textContent = validos.toLocaleString('pt-BR');
  if (elNaoCad) elNaoCad.textContent = naoCadastrados.toLocaleString('pt-BR');
  if (elInv) elInv.textContent = invalidos.toLocaleString('pt-BR');

  // Atualizar tabela de amostra
  const tbody = document.getElementById('tbodyPreviaImportacao');
  if (tbody) {
    tbody.innerHTML = amostraTabela.map(item => `
      <tr>
        <td><b>#${item.linha}</b></td>
        <td><code>${esc(item.codigo)}</code></td>
        <td><b>${esc(item.posicaoDetectada)}</b> <span class="small" style="color:#64748b">(${esc(item.endereco)})</span></td>
        <td>${esc(item.produto)}</td>
        <td><span class="badge-status ${item.statusBadgeClass}">${item.statusText}</span></td>
      </tr>
    `).join('');
  }

  const containerPrevia = document.getElementById('containerPreviaImportacao');
  if (containerPrevia) containerPrevia.style.display = 'block';
}

async function confirmarImportacaoEnderecamento() {
  if (!_itensValidosParaImportar || _itensValidosParaImportar.length === 0) {
    alert('Nenhum item válido para importar. Verifique o mapeamento das colunas.');
    return;
  }

  const qtd = _itensValidosParaImportar.length;
  const confirmar = confirm(`Deseja alocar ${qtd.toLocaleString('pt-BR')} caixas no Mapa do Pulmão e registrar os endereçamentos?\n\nAs caixas aparecerão imediatamente no Mapa do Pulmão como ocupadas.`);
  if (!confirmar) return;

  const btnConfirmar = document.getElementById('btnConfirmarImportacao');
  const btnCancelar = document.getElementById('btnCancelarImportacao');
  const containerProgresso = document.getElementById('containerProgressoImportacao');
  const barraFill = document.getElementById('barraProgressoFill');
  const txtPct = document.getElementById('txtPorcentagemProgresso');
  const txtStatus = document.getElementById('txtStatusProgresso');
  const msg = document.getElementById('resultadoImportacaoPulmao');

  if (btnConfirmar) btnConfirmar.disabled = true;
  if (btnCancelar) btnCancelar.disabled = true;
  if (containerProgresso) containerProgresso.style.display = 'block';

  try {
    // 1. Criar e alocar as caixas físicas no pulmão para que apareçam no Mapa
    // Regra estrita: 1 linha da planilha = 1 caixa individual = 1 posição = 1 código de produto
    const now = new Date().toISOString();
    let seqLocal = Number(seq) || 0;
    const newBoxesCreated = [];
    const usedAddresses = new Set();

    // Preservar entradas manuais ou por NF já existentes
    const existingBoxesPreservadas = boxes.filter(b => b.origem !== 'PLANILHA_ENDERECAMENTO');
    existingBoxesPreservadas.forEach(b => {
      if (b.status === 'ARMAZENADA') {
        const k = canonicalAddressKey(b.address);
        if (k) usedAddresses.add(k);
        usedAddresses.add(normAddr(b.address));
      }
    });

    _itensValidosParaImportar.forEach(item => {
      const cleanCode = String(item.codigo || '').trim().padStart(5, '0');
      if (!cleanCode || cleanCode === '00000') return;

      const prodName = lookup(cleanCode) || ('Código ' + cleanCode);
      const fam = family(prodName);
      const qpc = typeof getQtdPorCaixa === 'function' ? getQtdPorCaixa(cleanCode) : 1;

      // Localizar ou criar a posição única para esta caixa no pulmão
      const pos = encontrarOuCriarPosicaoParaItem(item.endereco, usedAddresses) || (item.posId ? { id: item.posId } : null);
      const posIdFinal = pos ? pos.id : (item.posId || item.endereco);

      seqLocal++;
      const boxId = 'EST-' + String(seqLocal).padStart(6, '0');
      const novaCaixa = {
        box: boxId,
        nf: 'ESTOQUE ATUAL',
        serie: '',
        fornecedor: 'Planilha Pulmão',
        operator: 'Importação Planilha',
        address: posIdFinal,
        status: 'ARMAZENADA',
        entrada: now,
        productCodes: [cleanCode], // ESTREITAMENTE 1 CÓDIGO POR CAIXA
        products: [{ code: cleanCode, name: prodName, family: fam }], // ESTREITAMENTE 1 PRODUTO
        unidadesPorCaixa: qpc,
        origem: 'PLANILHA_ENDERECAMENTO'
      };

      usedAddresses.add(canonicalAddressKey(posIdFinal));
      usedAddresses.add(normAddr(posIdFinal));
      newBoxesCreated.push(novaCaixa);
    });

    boxes = [...existingBoxesPreservadas, ...newBoxesCreated];
    seq = seqLocal;
    save();

    // Sincronizar inserção das caixas com Supabase se disponível
    if (typeof window.syncAddBoxesToSupabase === 'function' && newBoxesCreated.length > 0) {
      try {
        await window.syncAddBoxesToSupabase(newBoxesCreated);
      } catch(e) {
        console.warn('Aviso sincronização caixas Supabase:', e);
      }
    }

    // 2. Salvar o cadastro mestre dos endereços
    if (typeof window.salvarEnderecosLoteSupabase === 'function') {
      await window.salvarEnderecosLoteSupabase(_itensValidosParaImportar, (prog) => {
        if (barraFill) barraFill.style.width = prog.percentual + '%';
        if (txtPct) txtPct.textContent = prog.percentual + '%';
        if (txtStatus) {
          txtStatus.textContent = `Processando lote ${prog.loteAtual || 1} de ${prog.totalLotes || 1} (${prog.processados.toLocaleString('pt-BR')} de ${prog.total.toLocaleString('pt-BR')})...`;
        }
      });
    }

    // 3. Atualizar dashboard, mapa e visualização completa
    atualizarSelectRuas();
    dash();
    map();
    ultCaixa();
    if (typeof ult === 'function') ult();
    if (typeof buscarProduto === 'function') buscarProduto();

    if (msg) {
      msg.style.display = 'block';
      msg.innerHTML = `
        <div style="color:#059669;font-size:15px;font-weight:bold;margin-bottom:6px">✅ Caixas Alocadas com Sucesso no Mapa do Pulmão!</div>
        <div>Foram criadas e posicionadas <b>${newBoxesCreated.length.toLocaleString('pt-BR')}</b> caixas no <b>Mapa do Pulmão</b> e registrados <b>${qtd.toLocaleString('pt-BR')}</b> endereçamentos mestre.</div>
        <div class="small" style="margin-top:6px;color:#64748b">
          • As caixas já estão visíveis no <b>Mapa do Pulmão</b> (1 caixa por posição, 1 código de produto por caixa).<br>
          • Você pode clicar em qualquer posição no mapa para ver detalhes ou retirar caixas.
        </div>
      `;
    }

    // Fechar painéis de prévia
    const containerPrevia = document.getElementById('containerPreviaImportacao');
    const containerMap = document.getElementById('containerMapeamentoColunas');
    if (containerPrevia) containerPrevia.style.display = 'none';
    if (containerMap) containerMap.style.display = 'none';

    const input = document.getElementById('planilhaPulmao');
    if (input) input.value = '';
    _linhasPlanilhaPulmaoCarregadas = [];
    _itensValidosParaImportar = [];

  } catch (err) {
    console.error('Erro na importação:', err);
    if (msg) {
      msg.style.display = 'block';
      msg.innerHTML = '<span style="color:#ef4444;font-weight:bold">Erro ao salvar endereçamentos:</span> ' + esc(err.message || 'Falha inesperada.');
    }
  } finally {
    if (btnConfirmar) btnConfirmar.disabled = false;
    if (btnCancelar) btnCancelar.disabled = false;
    if (containerProgresso) containerProgresso.style.display = 'none';
  }
}

function alocarCaixasDoCadastroDeEnderecos(silent) {
  if (typeof garantirPosicoesParaEnderecos === 'function') garantirPosicoesParaEnderecos();
  
  let itens = [];
  try {
    itens = JSON.parse(localStorage.getItem('p5_1_lista_enderecos_linhas') || '[]');
  } catch(e) {}

  if (!itens || !itens.length) {
    const mapa = window.MAPA_ENDERECOS_PRODUTOS || {};
    const seen = new Set();
    for (const [code, rawEnd] of Object.entries(mapa)) {
      const clean = String(code).trim().padStart(5, '0');
      if (clean && clean !== '00000' && rawEnd && !seen.has(clean)) {
        seen.add(clean);
        itens.push({ codigo: clean, endereco: rawEnd });
      }
    }
  }

  if (!itens.length) {
    if (!silent) alert('Nenhum endereço cadastrado encontrado. Por favor, importe a planilha de endereçamento.');
    return;
  }

  const now = new Date().toISOString();
  let seqLocal = Number(seq) || 0;
  const newBoxesCreated = [];
  const usedAddresses = new Set();

  const existingBoxesPreservadas = boxes.filter(b => b.origem !== 'PLANILHA_ENDERECAMENTO');
  existingBoxesPreservadas.forEach(b => {
    if (b.status === 'ARMAZENADA') {
      const k = canonicalAddressKey(b.address);
      if (k) usedAddresses.add(k);
      usedAddresses.add(normAddr(b.address));
    }
  });

  itens.forEach(item => {
    const cleanCode = String(item.codigo).trim().padStart(5, '0');
    if (!cleanCode || cleanCode === '00000' || !item.endereco) return;

    const prodName = lookup(cleanCode) || ('Código ' + cleanCode);
    const fam = family(prodName);
    const qpc = typeof getQtdPorCaixa === 'function' ? getQtdPorCaixa(cleanCode) : 1;

    const pos = encontrarOuCriarPosicaoParaItem(item.endereco, usedAddresses) || (item.posId ? { id: item.posId } : null);
    const posIdFinal = pos ? pos.id : (item.posId || item.endereco);

    seqLocal++;
    const boxId = 'EST-' + String(seqLocal).padStart(6, '0');
    const novaCaixa = {
      box: boxId,
      nf: 'ESTOQUE ATUAL',
      serie: '',
      fornecedor: 'Cadastro de Endereçamento',
      operator: 'Sistema',
      address: posIdFinal,
      status: 'ARMAZENADA',
      entrada: now,
      productCodes: [cleanCode], // ESTREITAMENTE 1 CÓDIGO
      products: [{ code: cleanCode, name: prodName, family: fam }], // ESTREITAMENTE 1 PRODUTO
      unidadesPorCaixa: qpc,
      origem: 'PLANILHA_ENDERECAMENTO'
    };

    usedAddresses.add(canonicalAddressKey(posIdFinal));
    usedAddresses.add(normAddr(posIdFinal));
    newBoxesCreated.push(novaCaixa);
  });

  boxes = [...existingBoxesPreservadas, ...newBoxesCreated];
  seq = seqLocal;
  save();

  if (typeof window.syncAddBoxesToSupabase === 'function' && newBoxesCreated.length > 0) {
    window.syncAddBoxesToSupabase(newBoxesCreated);
  }
  if (typeof garantirPosicoesParaEnderecos === 'function') garantirPosicoesParaEnderecos();
  atualizarSelectRuas();
  dash();
  map();
  ultCaixa();
  if (typeof ult === 'function') ult();
  if (typeof buscarProduto === 'function') buscarProduto();

  if (!silent) {
    alert(`✓ ${newBoxesCreated.length.toLocaleString('pt-BR')} caixas foram geradas (1 caixa por linha) e estão visíveis no Mapa do Pulmão!`);
  }
}
window.alocarCaixasDoCadastroDeEnderecos = alocarCaixasDoCadastroDeEnderecos;

function cancelarPreviaImportacao() {
  const containerPrevia = document.getElementById('containerPreviaImportacao');
  const containerMap = document.getElementById('containerMapeamentoColunas');
  const input = document.getElementById('planilhaPulmao');
  const msg = document.getElementById('resultadoImportacaoPulmao');

  if (containerPrevia) containerPrevia.style.display = 'none';
  if (containerMap) containerMap.style.display = 'none';
  if (input) input.value = '';
  if (msg) msg.style.display = 'none';

  _linhasPlanilhaPulmaoCarregadas = [];
  _itensValidosParaImportar = [];
}

// Mantém compatibilidade caso chamado em outro ponto
function importarPlanilhaPulmao() {
  analisarPlanilhaPulmao();
}
function exportarInventarioPulmao(){
 const dados=[];
 stored().forEach(b=>{
   const produtos=(b.products&&b.products.length)?b.products:[{code:(b.productCodes||['']).join(', '),name:'Produto não identificado'}];
   produtos.forEach(pr=>dados.push({codigo:pr.code||'',descricao:pr.name||'',quantidade:1,endereco:b.address||'',caixa:b.box||''}));
 });
 dados.sort((a,b)=>String(a.endereco).localeCompare(String(b.endereco),'pt-BR'));
 const linhas=dados.map(x=>`<tr><td>${esc(x.codigo)}</td><td>${esc(x.descricao)}</td><td>${x.quantidade}</td><td>${esc(x.endereco)}</td><td>${esc(x.caixa)}</td></tr>`).join('');
 const html=`<html><head><meta charset="utf-8"></head><body><table border="1"><tr><th>Código do Produto</th><th>Descrição do Produto</th><th>Quantidade de Caixas</th><th>Endereço no Pulmão</th><th>Número da Caixa</th></tr>${linhas}</table></body></html>`;
 const blob=new Blob(['\ufeff'+html],{type:'application/vnd.ms-excel;charset=utf-8'});
 const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='inventario_pulmao.xlsx';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
function esc(v){return String(v??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('\"','&quot;')}
setInterval(() => {
  const clockEl = document.getElementById('clock');
  if (clockEl) clockEl.textContent = new Date().toLocaleTimeString('pt-BR');
}, 1000);

function initApp() {
  if (typeof restaurarPosicoesCustomizadas === 'function') restaurarPosicoesCustomizadas();
  if (typeof garantirPosicoesParaEnderecos === 'function') garantirPosicoesParaEnderecos();
  if (typeof atualizarSelectRuas === 'function') atualizarSelectRuas();
  if (typeof dash === 'function') dash();
  if (typeof ult === 'function') ult();
  if (typeof renderSobras === 'function') renderSobras();
  if (typeof map === 'function') map();
  if (typeof atualizarHome === 'function') atualizarHome();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}


function mostrarAba(id){
 document.querySelectorAll('main>section').forEach(s=>s.style.display='none');
 const el=document.getElementById(id); if(el) el.style.display='block';
 if(id==='pulmao'&&typeof map==='function')map();
 if(id==='home'&&typeof atualizarHome==='function')atualizarHome();
}

function atualizarHome(){
 const st=stored().length;
 const a=document.getElementById('homeStored'),b=document.getElementById('homeFree');
 if(a)a.textContent=st;
 if(b)b.textContent=Math.max(0,POS.length-st);
}


document.addEventListener('DOMContentLoaded', () => {
  const modalEl = document.getElementById('modal');
  if (modalEl) {
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) closeM();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeM();
  });

  if (typeof dash === 'function') dash();
  if (typeof ult === 'function') ult();
  if (typeof renderSobras === 'function') renderSobras();
  if (typeof map === 'function') map();
});

function getQtdPorCaixa(code){
 if (!code) return 1;
 const raw = String(code).trim();
 const pad = raw.padStart(5, '0');
 if (typeof QTD_POR_CAIXA_MASTER !== 'undefined') {
   if (QTD_POR_CAIXA_MASTER[pad]) return QTD_POR_CAIXA_MASTER[pad];
   if (QTD_POR_CAIXA_MASTER[raw]) return QTD_POR_CAIXA_MASTER[raw];
 }
 if (typeof QTD_POR_CAIXA !== 'undefined') {
   if (QTD_POR_CAIXA[pad]) return QTD_POR_CAIXA[pad];
   if (QTD_POR_CAIXA[raw]) return QTD_POR_CAIXA[raw];
 }
 return 1;
}
async function limparTodosOsDados() {
  const confirmacao = confirm('⚠️ Deseja realmente ZERAR todas as caixas em estoque no Pulmão e as movimentações?');
  if (!confirmacao) return;

  // 1. Limpar caixas, movimentações e histórico local
  boxes = [];
  moves = [];
  seq = 0;
  localStorage.removeItem('p5_1_boxes');
  localStorage.removeItem('p5_1_moves');
  localStorage.removeItem('p5_1_seq');
  localStorage.removeItem('p5_1_sobras');
  save();

  // 2. Limpar caixas e movimentações no Supabase
  if (typeof window.syncClearAllFromSupabase === 'function') {
    try {
      await window.syncClearAllFromSupabase();
    } catch(e) {
      console.warn('Aviso ao sincronizar limpeza no Supabase:', e);
    }
  }

  // 3. Atualizar todas as telas, contadores e tabelas
  if (typeof dash === 'function') dash();
  if (typeof map === 'function') map();
  if (typeof ult === 'function') ult();
  if (typeof ultCaixa === 'function') ultCaixa();
  if (typeof atualizarHome === 'function') atualizarHome();
  if (typeof renderSobras === 'function') renderSobras();
  if (typeof mov === 'function') mov();
  if (typeof buscarProduto === 'function') buscarProduto();

  alert('✓ Estoque de caixas no Pulmão zerado com sucesso!');
}
window.limparTodosOsDados = limparTodosOsDados;