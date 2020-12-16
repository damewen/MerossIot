Search.setIndex({docnames:["advanced-topics","api-reference/controller/device/base","api-reference/controller/device/channel","api-reference/controller/device/generic","api-reference/controller/device/hub","api-reference/controller/mixins/consumption","api-reference/controller/mixins/electricity","api-reference/controller/mixins/garage","api-reference/controller/mixins/hub","api-reference/controller/mixins/light","api-reference/controller/mixins/spray","api-reference/controller/mixins/system","api-reference/controller/mixins/toggle","api-reference/controller/subdevice/sensor","api-reference/controller/subdevice/valve","api-reference/http","api-reference/index","api-reference/manager","common-gotchas","index","installation","meross-protocol","quick-start"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["advanced-topics.rst","api-reference\\controller\\device\\base.rst","api-reference\\controller\\device\\channel.rst","api-reference\\controller\\device\\generic.rst","api-reference\\controller\\device\\hub.rst","api-reference\\controller\\mixins\\consumption.rst","api-reference\\controller\\mixins\\electricity.rst","api-reference\\controller\\mixins\\garage.rst","api-reference\\controller\\mixins\\hub.rst","api-reference\\controller\\mixins\\light.rst","api-reference\\controller\\mixins\\spray.rst","api-reference\\controller\\mixins\\system.rst","api-reference\\controller\\mixins\\toggle.rst","api-reference\\controller\\subdevice\\sensor.rst","api-reference\\controller\\subdevice\\valve.rst","api-reference\\http.rst","api-reference\\index.rst","api-reference\\manager.rst","common-gotchas.rst","index.rst","installation.rst","meross-protocol.rst","quick-start.rst"],objects:{"meross_iot.controller.device":{BaseDevice:[1,0,1,""],ChannelInfo:[2,0,1,""],GenericSubDevice:[3,0,1,""],HubDevice:[4,0,1,""]},"meross_iot.controller.device.BaseDevice":{async_update:[1,1,1,""],channels:[1,1,1,""],firmware_version:[1,1,1,""],hardware_version:[1,1,1,""],internal_id:[1,1,1,""],lookup_channel:[1,1,1,""],name:[1,1,1,""],online_status:[1,1,1,""],register_push_notification_handler_coroutine:[1,1,1,""],type:[1,1,1,""],unregister_push_notification_handler_coroutine:[1,1,1,""],uuid:[1,1,1,""]},"meross_iot.controller.device.GenericSubDevice":{async_get_battery_life:[3,1,1,""],async_update:[3,1,1,""],internal_id:[3,1,1,""],online_status:[3,1,1,""]},"meross_iot.controller.mixins.consumption":{ConsumptionXMixin:[5,0,1,""]},"meross_iot.controller.mixins.consumption.ConsumptionXMixin":{async_get_daily_power_consumption:[5,1,1,""]},"meross_iot.controller.mixins.electricity":{ElectricityMixin:[6,0,1,""]},"meross_iot.controller.mixins.electricity.ElectricityMixin":{async_get_instant_metrics:[6,1,1,""],get_last_sample:[6,1,1,""]},"meross_iot.controller.mixins.garage":{GarageOpenerMixin:[7,0,1,""]},"meross_iot.controller.mixins.garage.GarageOpenerMixin":{async_close:[7,1,1,""],async_open:[7,1,1,""],get_is_open:[7,1,1,""]},"meross_iot.controller.mixins.hub":{HubMixn:[8,0,1,""],HubMts100Mixin:[8,0,1,""]},"meross_iot.controller.mixins.light":{LightMixin:[9,0,1,""]},"meross_iot.controller.mixins.light.LightMixin":{async_set_light_color:[9,1,1,""],get_color_temperature:[9,1,1,""],get_light_is_on:[9,1,1,""],get_luminance:[9,1,1,""],get_rgb_color:[9,1,1,""],get_supports_luminance:[9,1,1,""],get_supports_rgb:[9,1,1,""],get_supports_temperature:[9,1,1,""]},"meross_iot.controller.mixins.spray":{SprayMixin:[10,0,1,""]},"meross_iot.controller.mixins.system":{SystemAllMixin:[11,0,1,""],SystemOnlineMixin:[11,0,1,""]},"meross_iot.controller.mixins.toggle":{ToggleMixin:[12,0,1,""],ToggleXMixin:[12,0,1,""]},"meross_iot.controller.mixins.toggle.ToggleXMixin":{async_toggle:[12,1,1,""],async_turn_off:[12,1,1,""],async_turn_on:[12,1,1,""],is_on:[12,1,1,""]},"meross_iot.http_api":{ErrorCodes:[15,0,1,""],MerossHttpClient:[15,0,1,""]},"meross_iot.http_api.ErrorCodes":{CODE_BAD_PASSWORD_FORMAT:[15,3,1,""],CODE_DISABLED_OR_DELETED_ACCOUNT:[15,3,1,""],CODE_INVALID_EMAIL:[15,3,1,""],CODE_MISSING_PASSWORD:[15,3,1,""],CODE_NO_ERROR:[15,3,1,""],CODE_TOKEN_EXPIRED:[15,3,1,""],CODE_TOKEN_INVALID:[15,3,1,""],CODE_TOO_MANY_TOKENS:[15,3,1,""],CODE_UNEXISTING_ACCOUNT:[15,3,1,""],CODE_WRONG_CREDENTIALS:[15,3,1,""],CODE_WRONG_EMAIL:[15,3,1,""]},"meross_iot.http_api.MerossHttpClient":{async_from_user_password:[15,1,1,""],async_invalidate_credentials:[15,1,1,""],async_list_devices:[15,1,1,""],async_list_hub_subdevices:[15,1,1,""],async_login:[15,1,1,""],async_logout:[15,1,1,""],cloud_credentials:[15,1,1,""]},"meross_iot.manager":{MerossManager:[17,0,1,""]},"meross_iot.manager.MerossManager":{async_device_discovery:[17,1,1,""],async_execute_cmd:[17,1,1,""],async_init:[17,1,1,""],find_devices:[22,1,1,""],register_push_notification_handler_coroutine:[17,1,1,""],unregister_push_notification_handler_coroutine:[17,1,1,""]},meross_iot:{http_api:[15,2,0,"-"],manager:[17,2,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:attribute"},terms:{"100":9,"1000":0,"1001":15,"1002":15,"1003":15,"1004":15,"1005":15,"1006":15,"1008":15,"1019":15,"1200":15,"1301":15,"2001":17,"255":[9,22],"300":17,"3rd":19,"8bit":9,"case":[0,15,17,18,19,21,22],"class":[1,2,3,4,5,6,7,8,9,10,11,12,15,17,18,22],"default":[0,6,7,9,12,21],"enum":[1,17,22],"float":17,"function":[0,1,17,22],"import":[19,21,22],"int":[1,2,7,9,17],"new":[0,18,21,22],"return":[1,3,5,6,7,9,12,15,17,22],"static":[],"switch":[1,12,19],"true":[1,3,5,6,7,9,12,17],"try":[1,3,21],"while":18,AND:[17,22],AWS:21,DNS:21,For:[0,18,19,22],Its:1,Not:15,TLS:21,That:0,The:[0,6,7,17,18,19,21,22],Then:22,There:[18,21],__main__:22,__meross_cr:15,__name__:22,__onoff:9,_md5:21,abl:21,about:[18,19,21,22],abov:[0,21],absolv:22,abstracteventloop:17,abus:18,access:[18,21,22],accordingli:17,account:[0,15,18,21,22],accur:6,accuraci:21,acquir:18,across:15,actual:18,actuat:22,add:[0,18],added:0,address:[15,18,21],adopt:18,advanc:19,advis:0,after:[18,22],again:[18,22],against:[0,15,18,21],aim:21,albertogeniola:20,alert:[],align:18,all:[0,17,21,22],allow:[1,21,22],alreadi:17,also:[0,17,21,22],altern:0,alwai:[0,18],ambient:22,ambient_temperatur:[],among:21,ani:[0,1,6,15,17,18,19,21,22],anoth:21,answer:17,api:[15,17,18,19,21,22],app:[0,17,18,19,22],app_id:21,appli:18,applianc:21,applic:21,approach:[18,19],architectur:19,archiv:20,arg:[1,3,5,6,7,9,12,15,17],argument:[17,22],aris:0,around:22,ask:[15,18,21],assign:[1,17,22],associ:15,assum:21,async:[1,3,5,6,7,9,12,15,17,19,22],async_clos:7,async_device_discoveri:[17,22],async_execute_cmd:17,async_from_user_password:[15,22],async_get_battery_lif:3,async_get_daily_power_consumpt:5,async_get_instant_metr:[6,22],async_get_temperatur:22,async_init:[17,22],async_invalidate_credenti:15,async_list_devic:15,async_list_hub_subdevic:15,async_login:15,async_logout:[15,22],async_open:7,async_set_light_color:[9,22],async_set_preset_temperatur:[],async_toggl:12,async_turn_off:[12,22],async_turn_on:[12,22],async_upd:[1,3,18,22],asynchron:18,asyncio:[17,18,19,22],attack:21,attempt:21,attribut:6,author:[21,22],auto_reconnect:17,autom:[18,19],automat:[0,1,3,18],avail:[21,22],avoid:[6,18,22],await:[1,17,18,22],awar:18,backend:19,bad:15,ban:[0,18],bandwidth:[1,3],base64:21,base64_encoded_password:21,base64_encoded_ssid:21,base:[0,17,22],basedevic:[16,17,19],basic:[0,1,3,19,21,22],batteri:3,batteryinfo:3,becom:18,been:[0,1,15,17,21,22],befor:[0,17,18,21,22],belong:15,below:0,between:[19,21,22],bind:21,bit:[0,19,22],block:[18,19],blue:9,bodi:21,bool:[1,2,3,5,6,7,9,12,15,17],both:[0,22],bought:19,bright:9,broadcast:21,broker:[0,17,18,19,21],bucket:0,build:[0,15,19,21],built:19,bulb:[9,12,19],burst:0,burst_rat:0,burst_requests_per_second_limit:[0,17],button:[21,22],byt:[17,22],ca_cert:17,cach:[6,22],calcul:[6,21],call:[6,17,18],callabl:[1,17],can:[0,1,9,17,18,20,21,22],capabl:[9,17,22],carefulli:22,carri:21,caus:18,cautiou:15,celsiu:[],certif:21,chang:[0,1,18,19,22],channel:[1,5,6,7,9,12,22],channel_id_or_nam:1,channel_typ:2,channelinfo:[16,19],character:1,check:[0,21,22],choos:22,chose:22,chosen:22,classmethod:15,client:[16,17,19,22],clone:20,close:[7,18,22],cloud:[0,1,3,18,21],cloud_credenti:15,code:[0,20,22],code_bad_password_format:15,code_disabled_or_deleted_account:15,code_invalid_email:15,code_missing_password:15,code_no_error:15,code_token_expir:15,code_token_invalid:15,code_too_many_token:15,code_unexisting_account:15,code_wrong_credenti:15,code_wrong_email:15,collect:0,color:[9,22],color_temperatur:9,com:[17,20],combin:[6,15],command:[0,7,9,17,18,19,20,22],common:[19,21],commun:21,complet:[18,22],compos:[1,3],concaten:21,config:21,configur:[9,18,21,22],connect:[17,18,21,22],consent:21,conserv:18,consid:[17,19,22],consumpt:[5,6,22],consumptionxmixin:[16,19,22],contact:18,contain:[9,15,17,22],content:21,continu:0,contrari:22,control:[0,1,2,3,4,5,6,7,8,9,10,11,12,17,19],conveni:18,copi:21,core:22,coro:[1,17],coroutin:[1,17],could:18,creat:[0,17,22],cred:15,credenti:[0,15,21],creds_env_var_nam:15,current:[0,1,3,6,7,9,18,22],current_color:22,danger:22,data:[1,3,5,6,19,22],datetim:[],deal:[15,17,22],debug:0,decid:0,dedic:0,def:22,defin:1,degre:[],delai:[0,17],delet:15,deliv:[1,18],demo:22,deriv:[17,22],describ:6,descript:0,design:0,destination_device_uuid:17,detail:22,dev:22,develop:[0,1,18,19,21,22],devic:[1,2,3,4,5,6,9,12,15,17,18,19],device_class:[17,22],device_internal_id:1,device_nam:[17,22],device_typ:[17,22],device_uuid:[1,4,5,6,7,8,9,10,11,12,17,21,22],devid:0,dhcp:21,dict:[1,5,17],did:19,differ:[18,21,22],digest:21,digit:21,directori:0,dirti:22,disabl:15,disconnect:18,discov:[0,17,18,22],discoveri:17,discrimin:21,document:[18,22],doe:[0,15,18,19,21,22],domain:17,domest:21,domot:19,done:[0,15],door:[7,19],down:22,download:20,drop:[0,17],drop_on_overquota:[1,3,5,6,9,12,17],drope:0,due:1,each:[0,9,18],easi:0,edg:18,effort:22,electr:[6,22],electricitymixin:[16,19,22],els:[18,22],email:[15,18,22],embed:[1,3],enabl:9,end:18,endpoint:[15,18],engin:21,enough:[6,21],ensur:22,enter:0,entir:22,enumer:[15,18],environ:22,equip:22,error:[15,18],errorcod:15,even:[0,19,22],event:[1,17,18,21],everi:[18,21],exampl:[0,22],exchang:0,exclus:22,execut:[17,21],exist:15,expect:21,experienc:18,expir:15,explain:18,explicit:21,explicitli:[17,19,21],expos:[0,1,22],fact:[0,22],fals:[1,2,3,5,6,7,9,12,15,17],far:19,fast:22,featur:[0,17],fetch:[17,18],field:[17,22],file:0,filter:[17,21,22],find:22,find_devic:[17,22],firmwar:[1,21],firmware_vers:1,first:[0,18,19,21,22],flaw:21,flood:[0,6],flow:19,folder:0,follow:[0,20,21,22],forbidden:21,forc:[1,3,22],form:21,format:15,forward:22,found:22,framework:19,from:[0,5,6,9,17,18,20,21,22],full:[1,3,15,17],further:19,garag:[7,19],garageopenermixin:[16,19,22],gatewai:21,gather:[0,6],gener:[0,1,9,15,17,21,22],genericpushnotif:17,genericsubdevic:[16,19],get:[1,3,9,17,22],get_color_temperatur:9,get_event_loop:22,get_is_open:[7,22],get_last_sampl:6,get_light_is_on:9,get_lumin:9,get_preset_temperatur:[],get_rgb_color:[9,22],get_supported_preset:[],get_supports_lumin:9,get_supports_rgb:[9,22],get_supports_temperatur:9,git:20,github:[0,20],given:[7,9,15],global:0,goe:22,going:19,gotcha:[19,22],grade:[],green:9,guarante:21,gui:19,hand:22,handl:[18,22],handler:[1,17],happen:[18,19,21],happi:19,hard:19,hardwar:[1,19,21],hardware_vers:1,has:[0,15,18,21,22],have:[0,1,9,15,17,19,20,21,22],header:21,heat:22,here:22,hex:21,him:18,histor:5,hit:[17,18],hoc:0,hold:21,host:21,hostnam:21,hour:[18,21],how:[18,19,22],howev:[0,18,21,22],http:[16,17,19,20,21,22],http_api:[15,17,22],http_api_cli:22,http_client:[17,22],httpdeviceinfo:15,httpsubdeviceinfo:15,hub:[3,8,15,17,22],hub_id:15,hubdevic:[16,17,19,22],hubdevice_uuid:3,hubmixn:[16,19],hubmts100mixin:[16,19],humid:22,identifi:[1,3,17,21,22],ids:[17,22],ignor:9,imag:21,immedi:22,immin:18,implement:[0,12,17,18,22],inconsist:18,index:[1,2,12,19],info:[0,6,9],inform:[0,1,6,21,22],initi:17,input:21,inspect:19,instal:19,instanc:18,instant:6,instant_consumpt:22,instead:[6,15,22],instruct:21,integ:9,intens:9,interest:[0,12],interfac:22,intern:[1,3],internal_id:[1,3,17,22],internet:18,interv:17,introduc:18,invalid:15,invok:[1,3,15,17,18,22],iot:[17,20],is_heat:22,is_master_channel:2,is_on:[12,22],isoformat:22,issu:[0,15,20,22],iter:[17,22],its:[0,3,17,21],itself:21,json:21,keep:[15,18],kei:21,keyword:18,kind:21,know:[19,22],known:[17,18],kwarg:[1,3,4,5,6,7,8,9,10,11,12,15],kword:17,last_sampled_humid:22,last_sampled_temperatur:22,last_sampled_tim:22,latest:[20,22],least:9,len:22,let:[19,22],level:0,leverag:19,librari:[0,1,3,18,20,21,22],light:[9,17,22],lightmixin:[16,17,19,22],like:22,limit:[1,3,17,18,19],limit_hit:0,line:18,list:[1,5,15,17,19],listen:[0,18],liter:21,local:[17,21],log:[15,18,19,21],logic:[17,22],login:[15,21],logout:[15,18,22],longer:0,look:[1,19,22],lookup_channel:1,loop:[17,18,22],loos:18,lost:18,low:0,lower:21,lumin:[9,22],mac:21,machin:18,magnet:22,mai:[0,6,18,21],main:22,make:[0,18,20,21],malici:21,manag:[1,3,4,5,6,7,8,9,10,11,12,17,18,19,22],mani:[15,18,21],manual:[20,22],map:[],mark:22,market:0,master:1,match:[17,21,22],matter:0,max:22,max_supported_temperatur:22,maximum:[0,17],md5:21,meant:19,measur:6,meross:[0,1,3,15,17,18,19,20,22],meross_:21,meross_devic:22,meross_device_uuid:17,meross_email:22,meross_iot:[0,1,2,3,4,5,6,7,8,9,10,11,12,15,17,22],meross_password:22,meross_sniff:0,merosscloudcr:15,merosscloudcredenti:15,merosshttpcli:[15,17,18,22],merossiot:[0,17,20,22],merossmanag:[0,16,18,19,22],merosssnif:0,messag:[0,18,21],message_id:21,messageid:21,method:[1,3,6,15,17,18,21,22],metric:6,might:[1,15,18,19,22],min:22,min_supported_temperatur:22,mind:19,minimum:[],miss:15,mixin:[5,6,7,8,9,10,11,12,17,22],mode:[9,21,22],model:[1,3,6,15,17,22],modifi:0,modul:[0,19],moment:18,monitor:22,more:[15,17,21,22],moreov:[],most:[0,1,3,19,21,22],motor:22,mount:22,mqtt:[0,1,3,17,18,19],mqtt_host:21,mqtt_port:21,ms100:22,ms100sensor:[16,17,19,22],msl120:[9,17,22],msl120b:22,mss210:21,mss310:[17,22],mts100v3:22,mts100v3valv:[16,17,19,22],multi:1,multipl:[17,22],must:[1,9,17,18,21,22],name:[0,1,2,17,21,22],namespac:[1,17,21],namspac:17,nativ:[15,17,22],need:[1,3,7,18,22],neighborhood:21,network:[0,1,3,19,21],new_temp:22,none:[1,2,3,6,7,9,12,17,22],note:[6,9,17,19,22],notic:18,notif:[1,3,17,18,19],notifi:17,now:[19,21],number:[0,18,22],numer:21,object:[0,1,6,15,17,18],obtain:21,occur:18,off:[9,12,22],offer:[6,22],offici:19,offlin:17,often:6,ofter:[],on_off:22,onc:[0,17,21,22],one:[0,9,17,21,22],ones:18,onli:[1,3,9,17,20,21,22],onlin:[0,1,3,17,22],online_statu:[1,3,17,22],onlinestatu:[17,22],onoff:9,open:[7,19,21],open_statu:22,oper:[1,7,9,12,22],operations__:9,option:[2,6,7,9,12,17,22],order:[0,17,18,21,22],origin:0,other:[1,17,18,21,22],otherwis:[7,9],outcom:21,over:0,over_limit_delay_second:0,over_limit_threshold_percentag:[0,17],overquota:17,own:22,page:19,pair:19,panoram:22,param:[1,17],paramet:[0,1,3,5,6,7,9,12,15,17,21,22],parti:19,particular:17,pass:[0,22],password:[0,15,21,22],path:21,pattern:[18,19],payload:[17,21],per:0,percentag:0,perform:[0,15,17,18,19,21],phase:21,physic:21,piec:19,pip:20,pipi:20,place:19,plai:[0,22],plan:19,pleas:[6,9,19],plu:[1,3],plug:[21,22],plug_ip_address:21,plugin:[3,6,19],point:[21,22],polici:0,poll:[3,6],port:[17,21],portion:21,possibl:[0,15,21],post:21,power:[5,6,22],powerinfo:6,preced:18,prefix:[1,3,21],preset:[],press:[0,21,22],pretti:0,prevent:[0,18],previous:[1,6,17,18],print:22,proactoreventloop:18,probabl:19,proce:0,product:19,program:[0,1,3,19],proper:22,properli:18,properti:[1,3,15,22],protocol:19,provid:[15,17,19,21,22],proxim:22,publish:21,pull:21,push:[1,3,17,18,19],put:21,python:[0,18,19,20,22],quick:19,quickli:22,quit:22,rais:0,randint:22,random:22,randomli:22,rate:[17,18,19],ratelimitexceed:0,rather:[0,6,22],reach:[0,18],react:1,read:[5,6,19],readabl:22,realli:22,reason:[0,18,19,22],reboot:21,receiv:[1,3,17,18,21],recent:[6,22],recipi:22,recogn:21,red:9,refer:[6,19,22],refresh:6,refus:15,regist:[0,1,5,15,17,22],register_push_notification_handler_coroutin:[1,17],registri:17,rel:[17,22],relat:18,releas:[0,18],relev:17,reli:[0,6,19,22],remot:[0,17],remov:[0,18],report:[0,17,21,22],repres:21,represent:1,republish:21,request:[0,18,21],requests_per_second_limit:[0,17],requir:20,respons:[0,21,22],restor:18,restrict:17,result:[17,18,22],resum:21,retriev:[17,21,22],revers:21,revis:1,rgb:[9,22],right:19,risk:22,room:[],rout:21,run:[0,1,3,18],run_until_complet:22,runtimeerror:18,safe:22,same:15,sampl:22,sample_timestamp:6,satisfi:[17,22],scan:21,script:[18,22],search:[19,22],second:[0,17,21],secret:21,section:[18,21,22],secur:[0,18,21],seem:[19,21],select:0,send:[0,7,17,18,21,22],sens:[6,22],sensit:[0,17,22],sensor:[17,19],sent:[0,17,21],separ:21,sequenc:21,seriou:21,serv:[0,21],server:21,session:15,set:[0,17,21,22],set_env_var:15,set_event_loop_polici:[18,22],settabl:[],setup:[18,22],sever:0,shoul:17,should:[0,1,6,15,17,18,19,21,22],show:22,shown:0,sign:21,signal:22,signatur:[1,21,22],simpl:21,simpli:[0,21],simplifi:15,simul:22,sinc:21,situat:18,skip_rate_limit:[1,3,5,6,9,12],skip_rate_limiting_check:17,sleep:22,smart:[0,12,22],snif:[0,21],sniff:19,sniffer:0,snippet:[0,22],solv:18,some:[1,3,18,19,22],somehow:22,someon:[18,22],soon:[17,22],sourc:20,specif:[0,1,15,21,22],specifi:[9,12,17,22],spoof:21,sprai:10,spraymixin:[16,19],ssid:21,ssl:21,standard:0,start:[0,18,19,21],stat:12,state:[1,9,12,18,21,22],statu:[0,1,3,7,12,17,18,22],step:21,still:21,stop:0,store:15,str1:21,str2:21,str:[1,2,3,4,5,6,7,8,9,10,11,12,15,17,22],straight:22,strictli:[1,3],string:[17,21,22],strongli:0,stuff:19,sub:15,subdevic:[15,17,22],subdevice_id:3,subscrib:[17,21],success:21,suffix:[1,3],support:[0,9,12,17,22],sure:[0,15,18,20],suspend:18,suspens:18,system:11,systemallmixin:[16,19],systemonlinemixin:[16,19],take:19,taken:22,target:22,target_temperatur:22,task:19,team:[0,18],tell:[9,17,21],temp:22,temperatur:[9,22],test:0,than:[0,6,22],thei:22,them:[0,22],themselv:22,thermostat:19,thi:[0,1,3,5,6,9,12,15,17,18,20,21,22],thing:[19,22],those:17,though:0,three:9,threshold:0,time:[15,17,18,19,21,22],timeout:17,timestamp:21,toggl:[9,12,17,22],togglemixin:[16,19,22],togglex:[9,12,17,22],togglexmixin:[16,17,19,22],togglexmixn:22,token:[0,15,18],too:[15,18,19],tool:0,top:18,topic:[17,19,21],traffic:[19,21],treat:21,tri:21,trigger:[],tropic:21,tupl:9,ture:22,turn:[9,12,22],two:[0,21],txt:20,type:[1,17,21,22],unavail:1,uncom:22,underscor:21,understand:19,unfortun:22,union:1,uniqu:21,unknown:[1,17],unoffici:19,unregist:[1,17],unregister_push_notification_handler_coroutin:[1,17],unsupport:19,untrust:21,unzip:20,updat:[1,3,17,18,21,22],update_subdevice_statu:17,upgrad:20,upload:0,upon:[1,3],usag:15,use:[0,18,19,21,22],used:[1,3,9,15,18,19,21,22],user:[0,1,15,17,18,21,22],user_id:21,userid:21,usernam:[15,21],uses:21,using:[0,15,17,18,21],usual:[9,18],utc:[],util:[0,15],uuid:[1,15,17,22],valid:21,valu:[0,6,9,15,22],valv:[17,22],vari:9,verbos:0,veri:22,version:[0,1,18],via:[9,17,21,22],voltag:[6,22],wai:[0,18,19],wait:[0,17,22],want:[0,17,19,20,22],warn:[0,18],warranti:19,well:[19,22],when:[0,1,3,9,12,15,17,18,22],whenev:[1,17],where:[0,6,9,21],which:[0,7,15,17,18,21,22],whole:[17,22],why:22,wifi:21,window:[18,22],windowsselectoreventlooppolici:[18,22],within:22,without:[15,18,21],won:21,word:21,work:[18,19,20,22],would:[17,22],write:[18,21,22],wrong:[15,18],yet:0,you:[0,1,3,6,15,17,18,19,20,22],your:[0,1,3,18,22],your_meross_cloud_email:22,your_meross_cloud_password:22,zip:0},titles:["Advanced topics","BaseDevice","ChannelInfo","GenericSubDevice","HubDevice","ConsumptionXMixin","ElectricityMixin","GarageOpenerMixin","HubMixn","LightMixin","SprayMixin","SystemAllMixin","ToggleXMixin","Ms100Sensor","Mts100v3Valve","HTTP Client","API Reference","MerossManager","Common gotchas","Welcome to MerossIot Library\u2019s documentation!","Installation","Meross Protocol Inspection","Quick start"],titleterms:{"switch":22,advanc:0,api:16,app:21,architectur:21,basedevic:1,befor:19,bulb:22,channelinfo:2,client:[15,21],command:21,common:18,consumptionxmixin:5,content:19,control:22,data:0,devic:[0,21,22],document:19,door:22,electricitymixin:6,flow:21,garag:22,garageopenermixin:7,genericsubdevic:3,gotcha:18,http:15,hubdevic:4,hubmixn:8,hubmts100mixin:8,indic:19,inspect:21,instal:20,librari:19,lightmixin:9,limit:0,list:22,log:0,manag:0,meross:21,merossiot:19,merossmanag:17,mqtt:21,ms100sensor:13,mts100v3valv:14,notif:21,open:22,pair:21,protocol:21,push:21,quick:22,rate:0,read:22,refer:16,sensor:22,sniff:0,spraymixin:10,start:22,systemallmixin:11,systemonlinemixin:11,tabl:19,thermostat:22,thi:19,togglemixin:12,togglexmixin:12,topic:0,using:19,welcom:19}})