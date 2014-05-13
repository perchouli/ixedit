/* ==================== IXEDIT ==================== */

/*!
 * IxEdit v0.0.1
 * https://github.com/perchouli/ixedit
 *
 * Created by Sociomedia Inc.
 * Now maintained by Perchouli <jp.chenyang@gmail.com>
 * Licensed under GPL.
 * 
 * IxEdit depends on and has links to jQuery and jQuery UI JavaScript Libraries.
 * 
 * Date: 2014-05-06
 */


// ixedit object.
var ixedit = {
  appName: 'IxEdit',
  version: '0.0.1',
  term: '2014',
  hasLocalDb: false,
  detectBrowserLang: function(){
    try {
      return (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
    }catch(e){
      return undefined;
    }
  },
  // Define alert messages for booting.
  babyLang: {
    en : {
      'needLocalStorage':'IxEdit needs client-side database storage',
      'needCurrentJQueryUI':'IxEdit needs jQuery UI 1.7 or higher.',
      'needJQueryUI':'IxEdit needs jQuery UI.',
      'needCurrentJQuery':'IxEdit jQuery 1.3 or higher.',
      'needJQuery':'IxEdit needs jQuery.'
    },
    ja : {
      'needLocalStorage':'IxEdit を利用するには、クライアントサイド・データベース・ストレージ。',
      'needCurrentJQueryUI':'IxEdit を利用するには jQuery UI 1.7 以上が必要です。',
      'needJQueryUI':'IxEdit を利用するには JQuery UI が必要です。',
      'needCurrentJQuery':'IxEdit を利用するには、jQuery 1.3 以上が必要です。',
      'needJQuery':'IxEdit を利用するには、jQuery が必要です。'
    },
    zh : {
      'needLocalStorage':'IxEdit 需要本地存储的支持，请使用支持localStorage的浏览器',
      'needCurrentJQueryUI':'IxEdit 需要使用jQuery UI 1.7以上的支持',
      'needJQueryUI':'IxEdit 需要jQuery UI 支持',
      'needCurrentJQuery':'IxEdit 需要jQuery1.3以上版本的支持',
      'needJQuery':'IxEdit 需要jQuery js库的支持。'
    }
  },
  boot: function(){
    // Check jQuery
     if(window.jQuery){
      var jQueryVersion = jQuery.fn.jquery;
      var jQueryVersionArray = jQueryVersion.split('.');
      // Check jQuery version
      if(jQueryVersionArray[0]>='1'){
        // Check jQuery UI
        if(jQuery.ui){
          var jQueryUIVersion =  jQuery.ui.version;
          var jQueryUIVersionArray = jQueryUIVersion.split('.');
          // Check jQuery UI version
          return true;
        } else {
          window.alert(ixedit.babyLabel.needJQueryUI);
          return false;
        };
      } else {
        window.alert(ixedit.babyLabel.needCurrentJQuery);
        return false;
      };
    } else {
      window.alert(ixedit.babyLabel.needJQuery);
      return false;
    };
  }
};

// Detect browser language
ixedit.browserLang = ixedit.detectBrowserLang();
switch(ixedit.browserLang){
  case 'en':
    ixedit.babyLabel = ixedit.babyLang['en'];
    break;
  case 'ja':
    ixedit.babyLabel = ixedit.babyLang['ja'];
    break;
  case 'zh':
    ixedit.babyLabel = ixedit.babyLang['zh'];
    break;
  default:
    ixedit.babyLabel = ixedit.babyLang['en'];
};


if(ixedit.boot()){ // Is boot true? Here you go the rest.
// ---------- IxEdit Lang Property
ixedit.lang = {
  //Chinese
  zh : {
    'appName':'IxEdit',
    'listStatusItem':'组项目',
    'listStatusItems':'组项目',
    'listStatusSelected':'个操作对象',
    'inputHeaderUseracton':'动作',
    'inputHeaderSystemfeedback':'效果',
    'inputHeaderCondition':'条件',
    'inputHeaderComment':'备注',
    'inputHeaderStatusItem':'组项目',
    'inputHeaderStatusItems':'组项目',
    'inputHeaderStatusNone':'暂无',
    'inputHeaderStatusCommented':'注释',
    'inputLabelElement':'对象选择器',
    'inputLabelEvent':'事件',
    'inputLabelPreventDefault':'阻止默认行为',
    'inputLabelStopBubbling':'阻止事件冒泡',
    'inputLabelDelay':'延迟',
    'inputLabelCommand':'命令',
    'inputLabelCss':'属性',
    'inputLabelClassName':'Class名',
    'inputLabelValue':'值',
    'inputLabelAttribute':'属性',
    'inputLabelEventName':'事件名',
    'inputLabelDuration':'持续时间',
    'inputLabelEffect':'效果',
    'inputLabelOpacity':'不透明度',
    'inputLabelEasing':'加减速',
    'inputLabelStatus':'状态',
    'inputLabelIncludeComment':'包含备注',
    'inputLabelFunction':'函数名',
    'inputLabelArgument':'参数',
    'inputLabelAlertMessage':'消息',
    'inputLabelInsertHTMLValue':'HTML',
    'inputLabelInsertHTMLPoint':'插入点',
    'inputLabelDraggableMoveCursor':'鼠标移到可移动元素上，指针变成可移动状态',
    'inputLabelDraggableOpacify':'移动时透明',
    'inputLabelDraggableRevert':'没有接收移动时返回原处',
    'inputLabelDraggableContainment':'移不出父容器',
    'inputLabelResizableKeepAspect':'保持高宽比例',
    'inputLabelResizableHandle':'允许调整方向',
    'inputLabelResizableTop':'上',
    'inputLabelResizableRight':'右',
    'inputLabelResizableBottom':'下',
    'inputLabelResizableLeft':'左',
    'inputLabelResizableTR':'上-右',
    'inputLabelResizableBR':'下-右',
    'inputLabelResizableBL':'下-左',
    'inputLabelResizableTL':'上-左',
    'inputLabelResizableContainment':'不能超过父容器',
    'inputLabelDragAxes':'轴',
    'inputLabelSortableRevert':'插入时有动态效果',
    'inputLabelAccordionAutoHeight':'锁定高度',
    'inputLabelAccordionCollapsible':'允许关闭全部',
    'inputLabelTabsSelected':'默认tab',
    'inputLabelTabsSelectedAnnotation':'(从1开始，0表示没有默认显示tab)',
    'inputLabelTabsFade':'渐隐',
    'inputLabelTabsSlide':'滑动',
    'inputLabelBlockSwitchFade':'渐隐',
    'inputLabelBlockSwitchSlide':'滑动',
    'inputLabelDatePickerFormat':'格式',
    'inputLabelDatePickerHasButton':'包含日期选择按钮',
    'inputLabelDatePickerShowMonthAfterYear':'在年之后显示月份',
    'inputLabelLoadURL':'URL',
    'inputLabelLoadURLAnnotation':'注意：你请求的远程文件，必须和此页面在同一域下',
    'inputLabelDialogWidth':'宽度',
    'inputLabelDialogHeight':'高度',
    'inputLabelDialogLeft':'左距离',
    'inputLabelDialogTop':'上距离',
    'inputLabelDialogDraggable':'允许拖动',
    'inputLabelDialogButtons':'包含按钮',
    'inputLabelDialogLabel':'按钮上的文字',
    'inputLabelDialogId':'ID',
    'inputLabelDialogLeftAnnotation':'(空表示居中，负值表示右距离)',
    'inputLabelDialogTopAnnotation':'(空表示居中，负值表示下距离)',
    'inputLabelJumpUrl':'URL',
    'eventLoad':'Load:页面加载',
    'eventUnload':'Unload:页面关闭',
    'eventChange':'Change:发生变化',
    'eventClick':'Click:点击',
    'eventDblClick':'Double Click:双击',
    'eventDrop':'Drop:接收拖动时',
    'eventError':'Error:发生错误',
    'eventFocus':'Focus:获得焦点',
    'eventFocusOut':'Focus Out:失去焦点',
    'eventKeyDown':'Key Down:按下键盘按键时',
    'eventKeyPress':'Key Press:按下字面键时',
    'eventKeyUp':'Key Up:按键弹起时',
    'eventMouseDown':'Mouse Down:鼠标任意键被按下时',
    'eventMouseMove':'Mouse Move:鼠标移动时',
    'eventMouseOut':'Mouse Out:鼠标移出时',
    'eventMouseOver':'Mouse Over:鼠标浮过时',
    'eventMouseUp':'Mouse Up:鼠标按键弹起时',
    'eventResize':'Resize:改变尺寸时',
    'eventScroll':'Scroll:滚动时',
    'eventSelect':'Select:被选中时',
    'eventSubmit':'Submit:提交时',
    'insertHTMLOverwrite':'重写选择元素的内部HTML',
    'insertHTMLInsideBottom':'在选择元素的内部下方插入',
    'insertHTMLInsideTop':'在选择元素的内部上方插入',
    'insertHTMLAfter':'在选择元素的后方插入',
    'insertHTMLBefore':'在选择元素的前方插入',
    'dragAxesX':'X轴',
    'dragAxesY':'Y轴',
    'dragAxesXY':'X轴和Y轴',
    'mainButtonNew':'新建',
    'mainButtonDuplicate':'复制副本',
    'mainButtonDelete':'删除',
    'mainButtonReload':'刷新',
    'mainButtonEdit':'编辑',
    'mainButtonCancel':'取消',
    'mainButtonReset':'复原',
    'mainButtonDoneReload':'保存并刷新页面',
    'mainButtonDone':'保存',
    'mainButtonClose':'关闭',
    'mainButtonImport':'导入',
    'condTypeIf':'匹配',
    'condTypeIfNot':'不匹配',
    'of':'',
    'listHeaderCheck':' ',
    'listHeaderEvent':'事件',
    'listHeaderTrigger':'触发选择器',
    'listHeaderTarget':'响应选择器',
    'listHeaderCommand':'响应动作',
    'listHeaderComment':'备注',
    'utilityAbout':'关于 ' + ixedit.appName,
    'utilityDeploy':'导出js代码',
    'utilityExport':'导出设置',
    'utilityImport':'导入设置',
    'utilityShowJson':'显示JSON',
    'utilityShowDb':'显示数据库记录',
    'utilityDiscardDb':'丢弃数据表',
    'commandHelp':'命令帮助',
    'messageNoCondition':'暂时不要求条件. 点击 \"+\" 按钮可以添加一个',
    'messageCommndNotSupported':'现在不能编辑此命令',
    'none':'默认',
    'normal':'默认',
    'linear':'无',
    'add':'添加',
    'remove':'移除',
    'alertDeletingItem1':'你确定要删除此项吗?',
    'alertDeletingItem2':'你确定要删除这些吗? ',
    'alertDeletingItem3':' 项目?',
    'alertloadDemo':'当前页面已经存在脚本，要加载吗？',
    'version':'Version',
    'copyright':'Created by Sociomedia Inc. <br />Maintained by Perchouli  &lt; jp.chenyang@gmail.com  &gt;',
    'instructionDeploy':'<h2>To embed the generated JavaScript code to your HTML</h2><ol><li>Copy the following JavaScript code.</li><li>Open your HTML file with a text editor.</li><li>Paste the code to very bottom of inside the &lt;head&gt; element.</li><li>Delete the line which is loading IxEdit script file like &lt;script type="text/javascript" src="yourpath/ixedit.js"&gt;&lt;/script&gt;.</li><li>Delete the line which is loading IxEdit CSS file like &lt;link type="text/css" href="yourpath/ixedit.css" rel="stylesheet"&gt; also.</li><li>Save the HTML file and reload it with a browser.</li></ol>',
    'instructionImport':'<h2>To import data from another IxEdit-editing page</h2><ol><li>Copy the data in the Exporting dialog from the page you want to import from.</li><li>Paste the data into the following text area.</li><li>Hit the Import button.</li></ol>',
    'instructionExport':'<h2>To export the data to another IxEdit-editing page</h2><ol><li>Copy the following data.</li><li>Go to the IxEdit-editing browser window you want to import to.</li><li>Open Import dialog and paste the data.</li></ol>',
    'importSelectorLabel':'Import by : ',
    'importSelectorOptionLabel0':'Copy-Pasting',
    'importSelectorOptionLabel1':'Choose from existing data',
    'tipRouteBtn':'导入/导出/部署',
    'tipXRayBtn':'点击页面元素以选择对象元素选择器',
    'instructionXRay1':'点击目标元素以指定对象选择器',
    'cancel':'取消',
    'unloadingCaution':'你已经通过IxEdit改变了一些数据，它们尚未保存，如果你关闭/离开/刷新浏览器，改变的数据将丢失。\n\n如果你想保存它们，请先点击取消，然后点击"保存"按钮',
    'dayNamesMinSu':'日',
    'dayNamesMinMo':'一',
    'dayNamesMinTu':'二',
    'dayNamesMinWe':'三',
    'dayNamesMinTh':'四',
    'dayNamesMinFr':'五',
    'dayNamesMinSa':'六',
    'dayNamesShortSu':'星期日',
    'dayNamesShortMo':'星期一',
    'dayNamesShortTu':'星期二',
    'dayNamesShortWe':'星期三',
    'dayNamesShortTh':'星期四',
    'dayNamesShortFr':'星期五',
    'dayNamesShortSa':'星期六',
    'monthNames1':'一月',
    'monthNames2':'二月',
    'monthNames3':'三月',
    'monthNames4':'四月',
    'monthNames5':'五月',
    'monthNames6':'六月',
    'monthNames7':'七月',
    'monthNames8':'八月',
    'monthNames9':'九月',
    'monthNames10':'十月',
    'monthNames11':'十一月',
    'monthNames12':'十二月',
    'monthNamesShort1':'一月',
    'monthNamesShort2':'二月',
    'monthNamesShort3':'三月',
    'monthNamesShort4':'四月',
    'monthNamesShort5':'五月',
    'monthNamesShort6':'六月',
    'monthNamesShort7':'七月',
    'monthNamesShort8':'八月',
    'monthNamesShort9':'九月',
    'monthNamesShort10':'十月',
    'monthNamesShort11':'十一月',
    'monthNamesShort12':'十二月',
    'dayName':'日期',
    'cmdCat0':'DOM',
    'cmdCat1':'效果',
    'cmdCat2':'特效',
    'cmdCat11':'其他',
    'cmdCat21':'高级',
    'datePickerToday':'本月',
    'datePickerClose':'关闭'
  },
  // English
  en : {
    'appName':'IxEdit',
    'listStatusItem':'Item',
    'listStatusItems':'Items',
    'listStatusSelected':'Selected',
    'inputHeaderUseracton':'Action',
    'inputHeaderSystemfeedback':'Reaction',
    'inputHeaderCondition':'Condition',
    'inputHeaderComment':'Comment',
    'inputHeaderStatusItem':'Item',
    'inputHeaderStatusItems':'Items',
    'inputHeaderStatusNone':'None',
    'inputHeaderStatusCommented':'Commented',
    'inputLabelElement':'Selector',
    'inputLabelEvent':'Event',
    'inputLabelPreventDefault':'Prevent default behavior',
    'inputLabelStopBubbling':'Stop bubbling',
    'inputLabelDelay':'Delay',
    'inputLabelCommand':'Command',
    'inputLabelCss':'Property',
    'inputLabelClassName':'Class Name',
    'inputLabelValue':'Value',
    'inputLabelAttribute':'Attribute',
    'inputLabelEventName':'Event Name',
    'inputLabelDuration':'Duration',
    'inputLabelEffect':'Effect',
    'inputLabelOpacity':'Opacity',
    'inputLabelEasing':'Easing',
    'inputLabelStatus':'Status',
    'inputLabelIncludeComment':'Include comment',
    'inputLabelFunction':'Function Name',
    'inputLabelArgument':'Argument',
    'inputLabelAlertMessage':'Message',
    'inputLabelInsertHTMLValue':'HTML',
    'inputLabelInsertHTMLPoint':'Insert Point',
    'inputLabelDraggableMoveCursor':'Move Cursor',
    'inputLabelDraggableOpacify':'Opacify while dragging',
    'inputLabelDraggableRevert':'Revert unless dropped on a droppable',
    'inputLabelDraggableContainment':'Bound to parent element',
    'inputLabelResizableKeepAspect':'Keep aspect ratio',
    'inputLabelResizableHandle':'Handle',
    'inputLabelResizableTop':'Top',
    'inputLabelResizableRight':'Right',
    'inputLabelResizableBottom':'Bottom',
    'inputLabelResizableLeft':'Left',
    'inputLabelResizableTR':'T-R',
    'inputLabelResizableBR':'B-R',
    'inputLabelResizableBL':'B-L',
    'inputLabelResizableTL':'T-L',
    'inputLabelResizableContainment':'Bound to parent element',
    'inputLabelDragAxes':'Axis',
    'inputLabelSortableRevert':'Animated Insertion',
    'inputLabelAccordionAutoHeight':'Fixed Height',
    'inputLabelAccordionCollapsible':'Allow All Closed',
    'inputLabelTabsSelected':'Default Tab Number',
    'inputLabelTabsSelectedAnnotation':'(1-based index. 0 for none.)',
    'inputLabelTabsFade':'Fade',
    'inputLabelTabsSlide':'Slide',
    'inputLabelBlockSwitchFade':'Fade',
    'inputLabelBlockSwitchSlide':'Slide',
    'inputLabelDatePickerFormat':'Format',
    'inputLabelDatePickerHasButton':'Has Picker Button',
    'inputLabelDatePickerShowMonthAfterYear':'Show Month after Year',
    'inputLabelLoadURL':'URL',
    'inputLabelLoadURLAnnotation':'Notice: Remote file you request and this page should be in the same domain.',
    'inputLabelDialogWidth':'Width',
    'inputLabelDialogHeight':'Height',
    'inputLabelDialogLeft':'Left',
    'inputLabelDialogTop':'Top',
    'inputLabelDialogDraggable':'Draggable',
    'inputLabelDialogButtons':'Buttons',
    'inputLabelDialogLabel':'Label',
    'inputLabelDialogId':'ID',
    'inputLabelDialogLeftAnnotation':'(Blank for Center. - for Right.)',
    'inputLabelDialogTopAnnotation':'(Blank for Center. - for Bottom.)',
    'inputLabelJumpUrl':'URL',
    'eventLoad':'Load',
    'eventUnload':'Unload',
    'eventChange':'Change',
    'eventClick':'Click',
    'eventDblClick':'Double Click',
    'eventDrop':'Drop',
    'eventError':'Error',
    'eventFocus':'Focus',
    'eventFocusOut':'Focus Out',
    'eventKeyDown':'Key Down',
    'eventKeyPress':'Key Press',
    'eventKeyUp':'Key Up',
    'eventMouseDown':'Mouse Down',
    'eventMouseMove':'Mouse Move',
    'eventMouseOut':'Mouse Out',
    'eventMouseOver':'Mouse Over',
    'eventMouseUp':'Mouse Up',
    'eventResize':'Resize',
    'eventScroll':'Scroll',
    'eventSelect':'Select',
    'eventSubmit':'Submit',
    'insertHTMLOverwrite':'Overwrite inside of selected element',
    'insertHTMLInsideBottom':'Inside-bottom of selected element',
    'insertHTMLInsideTop':'Inside-top of selected element',
    'insertHTMLAfter':'After selected element',
    'insertHTMLBefore':'Before selected element',
    'dragAxesX':'X',
    'dragAxesY':'Y',
    'dragAxesXY':'X and Y',
    'mainButtonNew':'New',
    'mainButtonDuplicate':'Duplicate',
    'mainButtonDelete':'Delete',
    'mainButtonReload':'Reload',
    'mainButtonEdit':'Edit',
    'mainButtonCancel':'Cancel',
    'mainButtonReset':'Revert',
    'mainButtonDoneReload':'Done and Reload',
    'mainButtonDone':'Done',
    'mainButtonClose':'Close',
    'mainButtonImport':'Import',
    'condTypeIf':'matches',
    'condTypeIfNot':'doesn\'t match',
    'of':'of',
    'listHeaderCheck':' ',
    'listHeaderEvent':'Action Event',
    'listHeaderTrigger':'Action Selector',
    'listHeaderTarget':'Reaction Selector',
    'listHeaderCommand':'Reaction Command',
    'listHeaderComment':'Comment',
    'utilityAbout':'About ' + ixedit.appName,
    'utilityDeploy':'Deploy',
    'utilityExport':'Export',
    'utilityImport':'Import',
    'utilityShowJson':'Show JSON',
    'utilityShowDb':'Show DB records',
    'utilityDiscardDb':'Discard DB table',
    'commandHelp':'Command Help',
    'messageNoCondition':'There is no condition currently. Click \"+\" button to add one.',
    'messageCommndNotSupported':'command is not editable now.',
    'none':'None',
    'normal':'Normal',
    'linear':'None',
    'add':'Add',
    'remove':'Remove',
    'alertDeletingItem1':'Are you sure you want to delete this item?',
    'alertDeletingItem2':'Are you sure you want to delete these ',
    'alertDeletingItem3':' items?',
    'alertloadDemo':'Some interactions are embedded on this page. Do you want to load them?',
    'version':'Version',
    'copyright':'Created by Sociomedia Inc. <br />Maintained by Perchouli  &lt; jp.chenyang@gmail.com  &gt;',
    'instructionDeploy':'<h2>To embed the generated JavaScript code to your HTML</h2><ol><li>Copy the following JavaScript code.</li><li>Open your HTML file with a text editor.</li><li>Paste the code to very bottom of inside the &lt;head&gt; element.</li><li>Delete the line which is loading IxEdit script file like &lt;script type="text/javascript" src="yourpath/ixedit.js"&gt;&lt;/script&gt;.</li><li>Delete the line which is loading IxEdit CSS file like &lt;link type="text/css" href="yourpath/ixedit.css" rel="stylesheet"&gt; also.</li><li>Save the HTML file and reload it with a browser.</li></ol>',
    'instructionImport':'<h2>To import data by copy-pasting from another IxEdit-editing page</h2><ol><li>Copy data from the Exporting dialog of the page you want to import from.</li><li>Paste the data into the following text area.</li><li>Hit the Import button.</li></ol>',
    'instructionImportFromDB':'<h2>To import data from existing interactions which have made on this browser</h2><ol><li>Choose one from following table.</li><li>Hit the Import button.</li></ol>',
    'instructionExport':'<h2>To export the data to another IxEdit-editing page</h2><ol><li>Copy the following data.</li><li>Go to the IxEdit-editing browser window you want to import to.</li><li>Open Import dialog and paste the data.</li></ol>',
    'importSelectorLabel':'Import by : ',
    'importSelectorOptionLabel0':'Copy-Pasting',
    'importSelectorOptionLabel1':'Choose from existing data',
    'tipRouteBtn':'Route Menu',
    'tipXRayBtn':'Choose selector by clicking on the page.',
    'instructionXRay1':'Click on the target element to specify the selector.',
    'cancel':'Cancel',
    'unloadingCaution':'You have modified some data with IxEdit, and it has not saved. If you close/leave/reload the window, your changes will be lost. \n\nTo save, cancel leaving this page and hit the "Done" button on IxEdit editor.',
    'dayNamesMinSu':'Su',
    'dayNamesMinMo':'Mo',
    'dayNamesMinTu':'Tu',
    'dayNamesMinWe':'We',
    'dayNamesMinTh':'Th',
    'dayNamesMinFr':'Fr',
    'dayNamesMinSa':'Sa',
    'dayNamesShortSu':'Sun',
    'dayNamesShortMo':'Mon',
    'dayNamesShortTu':'Tue',
    'dayNamesShortWe':'Wed',
    'dayNamesShortTh':'Thr',
    'dayNamesShortFr':'Fri',
    'dayNamesShortSa':'Sat',
    'monthNames1':'January',
    'monthNames2':'February',
    'monthNames3':'March',
    'monthNames4':'April',
    'monthNames5':'May',
    'monthNames6':'June',
    'monthNames7':'July',
    'monthNames8':'August',
    'monthNames9':'September',
    'monthNames10':'October',
    'monthNames11':'November',
    'monthNames12':'December',
    'monthNamesShort1':'Jan',
    'monthNamesShort2':'Feb',
    'monthNamesShort3':'Mar',
    'monthNamesShort4':'Apr',
    'monthNamesShort5':'May',
    'monthNamesShort6':'Jun',
    'monthNamesShort7':'Jul',
    'monthNamesShort8':'Aug',
    'monthNamesShort9':'Sep',
    'monthNamesShort10':'Oct',
    'monthNamesShort11':'Nov',
    'monthNamesShort12':'Dec',
    'dayName':'Dayname',
    'cmdCat0':'DOM',
    'cmdCat1':'Effect',
    'cmdCat2':'Generate',
    'cmdCat11':'Misc',
    'cmdCat21':'Advanced',
    'datePickerToday':'This Month',
    'datePickerClose':'Close'
  },
  // Japanese
  ja : {
    'appName':'IxEdit',
    'listStatusItem':'項目',
    'listStatusItems':'項目',
    'listStatusSelected':'個を選択',
    'inputHeaderUseracton':'アクション',
    'inputHeaderSystemfeedback':'リアクション',
    'inputHeaderCondition':'条件',
    'inputHeaderComment':'コメント',
    'inputHeaderStatusItem':'項目',
    'inputHeaderStatusItems':'項目',
    'inputHeaderStatusNone':'なし',
    'inputHeaderStatusCommented':'あり',
    'inputLabelElement':'セレクタ',
    'inputLabelEvent':'イベント',
    'inputLabelPreventDefault':'通常動作をキャンセル',
    'inputLabelStopBubbling':'バブリングを停止',
    'inputLabelDelay':'遅れ',
    'inputLabelCommand':'コマンド',
    'inputLabelCss':'プロパティ',
    'inputLabelClassName':'クラス名',
    'inputLabelValue':'値',
    'inputLabelAttribute':'属性',
    'inputLabelEventName':'イベント名',
    'inputLabelDuration':'継続時間',
    'inputLabelEffect':'効果',
    'inputLabelOpacity':'不透明度',
    'inputLabelEasing':'加減速',
    'inputLabelStatus':'状態',
    'inputLabelIncludeComment':'コメントを含める',
    'inputLabelFunction':'関数名',
    'inputLabelArgument':'引数',
    'inputLabelAlertMessage':'メッセージ',
    'inputLabelInsertHTMLValue':'HTML',
    'inputLabelInsertHTMLPoint':'挿入ポイント',
    'inputLabelDraggableMoveCursor':'移動カーソル',
    'inputLabelDraggableOpacify':'ドラッグ中に半透明にする',
    'inputLabelDraggableRevert':'ドロップ不可の要素にドロップされたら戻す',
    'inputLabelDraggableContainment':'親要素内に拘束する',
    'inputLabelResizableKeepAspect':'縦横比を保つ',
    'inputLabelResizableHandle':'つまみ',
    'inputLabelResizableTop':'上',
    'inputLabelResizableRight':'右',
    'inputLabelResizableBottom':'下',
    'inputLabelResizableLeft':'左',
    'inputLabelResizableTR':'右上',
    'inputLabelResizableBR':'右下',
    'inputLabelResizableBL':'左下',
    'inputLabelResizableTL':'左上',
    'inputLabelResizableContainment':'親要素に拘束',
    'inputLabelDragAxes':'軸',
    'inputLabelSortableRevert':'挿入のアニメート',
    'inputLabelAccordionAutoHeight':'高さ固定',
    'inputLabelAccordionCollapsible':'すべてを閉じることを許可',
    'inputLabelTabsSelected':'初期タブ番号',
    'inputLabelTabsSelectedAnnotation':'(1ベースの番号。 0で選択なし)',
    'inputLabelTabsFade':'フェード',
    'inputLabelTabsSlide':'スライド',
    'inputLabelBlockSwitchFade':'フェード',
    'inputLabelBlockSwitchSlide':'スライド',
    'inputLabelDatePickerFormat':'フォーマット',
    'inputLabelDatePickerHasButton':'ピッカーボタンあり',
    'inputLabelDatePickerShowMonthAfterYear':'月を年の後に表示',
    'inputLabelLoadURL':'URL',
    'inputLabelLoadURLAnnotation':'注意：リクエストする外部ファイルは、このページと同じドメイン上にある必要があります。',
    'inputLabelDialogWidth':'Width',
    'inputLabelDialogHeight':'Height',
    'inputLabelDialogLeft':'Left',
    'inputLabelDialogTop':'Top',
    'inputLabelDialogDraggable':'ドラッグ可能に',
    'inputLabelDialogButtons':'ボタン',
    'inputLabelDialogLabel':'ラベル',
    'inputLabelDialogId':'ID',
    'inputLabelDialogLeftAnnotation':'（空欄で中央、- で右寄せ）',
    'inputLabelDialogTopAnnotation':'（空欄で中央、- で下寄せ）',
    'inputLabelJumpUrl':'URL',
    'eventLoad':'ロード',
    'eventUnload':'アンロード',
    'eventChange':'値変更',
    'eventClick':'クリック',
    'eventDblClick':'ダブルクリック',
    'eventDrop':'ドロップ',
    'eventError':'エラー',
    'eventFocus':'フォーカス',
    'eventFocusOut':'フォーカスアウト',
    'eventKeyDown':'キーダウン',
    'eventKeyPress':'キープレス',
    'eventKeyUp':'キーアップ',
    'eventMouseDown':'マウスダウン',
    'eventMouseMove':'マウスムーブ',
    'eventMouseOut':'マウスアウト',
    'eventMouseOver':'マウスオーバー',
    'eventMouseUp':'マウスアップ',
    'eventResize':'リサイズ',
    'eventScroll':'スクロール',
    'eventSelect':'セレクト',
    'eventSubmit':'サブミット',
    'insertHTMLOverwrite':'セレクトした要素内を上書き',
    'insertHTMLInsideBottom':'セレクトした要素内の末尾',
    'insertHTMLInsideTop':'セレクトした要素内の先頭',
    'insertHTMLAfter':'セレクトした要素の後',
    'insertHTMLBefore':'セレクトした要素の前',
    'dragAxesX':'X',
    'dragAxesY':'Y',
    'dragAxesXY':'X と Y',
    'mainButtonNew':'新規',
    'mainButtonDuplicate':'複製',
    'mainButtonDelete':'削除',
    'mainButtonReload':'リロード',
    'mainButtonEdit':'編集',
    'mainButtonCancel':'キャンセル',
    'mainButtonReset':'復帰',
    'mainButtonDoneReload':'完了してリロード',
    'mainButtonDone':'完了',
    'mainButtonClose':'閉じる',
    'mainButtonImport':'インポート',
    'condTypeIf':'以下に一致',
    'condTypeIfNot':'以下に不一致',
    'of':'',
    'listHeaderCheck':' ',
    'listHeaderEvent':'アクションイベント',
    'listHeaderTrigger':'アクションセレクタ',
    'listHeaderTarget':'リアクションセレクタ',
    'listHeaderCommand':'リアクションコマンド',
    'listHeaderComment':'コメント',
    'utilityAbout':ixedit.appName + ' について',
    'utilityDeploy':'デプロイ',
    'utilityExport':'エクスポート',
    'utilityImport':'インポート',
    'utilityShowJson':'JSON を表示',
    'utilityShowDb':'DB レコードを表示',
    'utilityDiscardDb':'DB テーブルを消去',
    'commandHelp':'コマンドヘルプ',
    'messageNoCondition':'現在条件はありません。追加するには \"+\" ボタンをクリックします。',
    'messageCommndNotSupported':'コマンドは現在編集できません。',
    'none':'なし',
    'normal':'通常',
    'linear':'なし',
    'add':'追加',
    'remove':'削除',
    'alertDeletingItem1':'この項目を本当に削除しますか？',
    'alertDeletingItem2':'これら',
    'alertDeletingItem3':'項目を本当に削除しますか？',
    'alertloadDemo':'このページにはインタラクションが埋め込まれています。読み込みますか？',
    'version':'バージョン',
    'copyright':'Created by Sociomedia Inc. <br />Maintained by Perchouli  &lt; jp.chenyang@gmail.com  &gt;',
    'instructionDeploy':'<h2>生成された JavaScript コードを HTML に埋め込むには</h2><ol><li>下の JavaScript コードをコピーします。</li><li>テキストエディタで HTML ファイルを開きます。</li><li>&lt;head&gt; 要素内の一番下にコードをペーストします。</li><li>IxEdit スクリプトファイルを読み込むための &lt;script type="text/javascript" src="yourpath/ixedit.js"&gt;&lt;/script&gt; のような行を削除します。</li><li>IxEdit の CSS を読み込むための &lt;link type="text/css" href="yourpath/ixedit.css" rel="stylesheet"&gt; のような行も削除します。</li><li>HTML ファイルを保存し、ブラウザでリロードします。</li></ol>',
    'instructionImport':'<h2>他の IxEdit で編集中のページからデータをインポートするには</h2><ol><li>インポート元のページのエクスポートダイアログでデータをコピーします。</li><li>下のテキストエリアにデータをペーストします。</li><li>インポートボタンを押します。</li></ol>',
    'instructionImportFromDB':'<h2>このブラウザで作成した既存のインタラクションからデータをインポートするには</h2><ol><li>下のテーブルからひとつ選びます。</li><li>インポートボタンを押します。</li></ol>',
    'instructionExport':'<h2>他の IxEdit で編集中のページにデータをエクスポートするには</h2><ol><li>下のデータをコピーします。</li><li>インポートさせたい IxEdit で編集中のブラウザウィンドウを開きます。</li><li>インポートダイアログを開きデータをペーストします。</li></ol>',
    'importSelectorLabel':'インポート方法： ',
    'importSelectorOptionLabel0':'コピー＆ペースト',
    'importSelectorOptionLabel1':'既存データから選択',
    'tipRouteBtn':'メニュー',
    'tipXRayBtn':'ページ上のクリックでセレクタを指定します。',
    'instructionXRay1':'目的の要素をクリックしてセレクタを指定してください。',
    'cancel':'キャンセル',
    'unloadingCaution':'IxEdit 上で編集中の保存されていないデータがあります。ウインドウを閉じる/離れる/リロードするとそれらの変更が失われます。\n\n保存するには、このページにとどまり、IxEdit エディタ上で「完了」ボタンを押します。',
    'dayNamesMinSu':'日',
    'dayNamesMinMo':'月',
    'dayNamesMinTu':'火',
    'dayNamesMinWe':'水',
    'dayNamesMinTh':'木',
    'dayNamesMinFr':'金',
    'dayNamesMinSa':'土',
    'dayNamesShortSu':'日',
    'dayNamesShortMo':'月',
    'dayNamesShortTu':'火',
    'dayNamesShortWe':'水',
    'dayNamesShortTh':'木',
    'dayNamesShortFr':'金',
    'dayNamesShortSa':'土',
    'monthNames1':'1月',
    'monthNames2':'2月',
    'monthNames3':'3月',
    'monthNames4':'4月',
    'monthNames5':'5月',
    'monthNames6':'6月',
    'monthNames7':'7月',
    'monthNames8':'8月',
    'monthNames9':'9月',
    'monthNames10':'10月',
    'monthNames11':'11月',
    'monthNames12':'12月',
    'monthNamesShort1':'1月',
    'monthNamesShort2':'2月',
    'monthNamesShort3':'3月',
    'monthNamesShort4':'4月',
    'monthNamesShort5':'5月',
    'monthNamesShort6':'6月',
    'monthNamesShort7':'7月',
    'monthNamesShort8':'8月',
    'monthNamesShort9':'9月',
    'monthNamesShort10':'10月',
    'monthNamesShort11':'11月',
    'monthNamesShort12':'12月',
    'dayName':'曜日',
    'cmdCat0':'DOM',
    'cmdCat1':'イフェクト',
    'cmdCat2':'生成',
    'cmdCat11':'その他',
    'cmdCat21':'アドバンスド',
    'datePickerToday':'今月',
    'datePickerClose':'閉じる'
  }

};


if(ixedit.browserLang){
  switch(ixedit.browserLang){
    case 'en':
      ixedit.label = ixedit.lang['en'];
      break;
    case 'ja':
      ixedit.label = ixedit.lang['ja'];
      break;
    case 'zh':
      ixedit.label = ixedit.lang['zh'];
      break;
    default:
      ixedit.label = ixedit.lang['en'];
  };
}else{
  ixedit.label = ixedit.lang['en'];
};



// ---------- IxEdit Additional Properties

ixedit.format = 1; // Version of data format.
ixedit.enableMultiActions = true; // Enabling multiple reactions for one interaction.
ixedit.advancedMode = false; // Advanced mode
ixedit.inactivatingAll = false; // Inactivating all interactions.
ixedit.deployed = false; // If there is a deployed code or not.
ixedit.prevScrollTop = 0; // For recording dialog position in a drag event.
ixedit.prevScrollLeft = 0; // For recording dialog position in a drag event.

ixedit.dbName = "ixedit-database"; // DB name
ixedit.applicationName = "application1"; // Table name for common data.
ixedit.projectName = "project1"; // Table name for Ix records.
ixedit.screenID = ''; // Temporary record name (screenid column).

ixedit.addingNewIx = false; // Now creating a new interaction?
ixedit.gimmickAnimation = false; // Allow gimmick animations?

ixedit.evtMenuSource = '';
ixedit.cmdMenuSource = '';
ixedit.condCmdMenuSource = '';
ixedit.embedSources = [];

// ---------- IxEdit Other Properties as Object

ixedit.localdbi = new Object();
ixedit.dbi = ixedit.localdbi;

// Common preferences defaults
ixedit.commonPrefs = new Object();
ixedit.commonPrefs.inspectorWidth = 530;
ixedit.commonPrefs.inspectorHeight = 350;
// ixedit.commonPrefs.inspectorTop = 0; // Dont specify default for default centering
// ixedit.commonPrefs.inspectorLeft = 0; // Dont specify default for default centering
// ixedit.commonPrefs.inspectorWindowOffsetY = 0;
// ixedit.commonPrefs.inspectorWindowOffsetX = 0;
ixedit.commonPrefs.inspectorColumnCheckWidth = 25;
ixedit.commonPrefs.inspectorColumnEventWidth = '17%';
ixedit.commonPrefs.inspectorColumnTriggerWidth = '17%';
ixedit.commonPrefs.inspectorColumnTargetsWidth = '17%';
ixedit.commonPrefs.inspectorColumnCommandsWidth = '17%';
ixedit.commonPrefs.inspectorShaded = false;
ixedit.commonPrefs.areasShown = [true, true, false, false]; // Action, Reaction, Condition, Comment areas.
ixedit.commonPrefs.deployWithComment = false;

// Individual preferences defaults.
ixedit.prefs = new Object();
ixedit.prefs.sortKey = 'trigger';
ixedit.prefs.inspectorScrollTop = 0;
ixedit.prefs.selectedLineNo = [];




// IXS ARRAY
ixedit.ixs = new Array();

// Adding a new interaction.
ixedit.ixs.add = function(ixObj){
  this[this.length] = ixObj;
};

// Bind all interactions.
ixedit.ixs.setAll = function(){
  var thisLength = this.length;
  for(var cnt=0; cnt<thisLength; cnt++){
    var theIx = this[cnt];
    theIx.set();
  }
};

// Unbind all interactions.
ixedit.ixs.unsetAll = function(){
  var thisLength = this.length;
  for(var cnt=0; cnt<thisLength; cnt++){
    var theIx = this[cnt];
    theIx.unset();
  }
};

// Reset all interactions.
ixedit.ixs.resetAll = function(){
  var thisLength = this.length;
  for(var cnt=0; cnt<thisLength; cnt++){
    this.unsetAll();
    this.setAll();
  }
};

// Remove an interaction from ixs.
ixedit.ixs.del = function(ixNo){
  this.splice(ixNo,1);
};

// Activate or inactivate with the checkbox.
ixedit.ixs.activate = function(isActivating, lineNo){
  var targetIxNo = ixedit.listItems[lineNo].no;
  var targetIx = this[targetIxNo];
  var theTr = jQuery('.ixedit-table-item').eq(lineNo);
  var theEditButton = jQuery('#ixedit-button-edit');

  if(isActivating){
    theTr.removeClass('inactive');
    targetIx.active = true;
    targetIx.set();
    theEditButton.removeAttr('disabled').removeClass('disabled'); // enable the delete button then remove class
  } else {
    theTr.addClass('inactive');
    targetIx.active = false;
    targetIx.unset();
    theEditButton.attr('disabled', 'disabled').addClass('disabled'); // Disable the delete button then add class
  };


};

// Generate deploying code.
ixedit.ixs.getJqueryCode = function(){

  var usedCommands = new Object();
  var preserves = new Array();

  var isIncludingComments = ixedit.commonPrefs.deployWithComment;

  var theCodes = new Array();
  var prefix = '<script type=\"text/javascript\">\n\t\n\tif(window.ixedit){ixedit.deployed = true};\n\tif(window.jQuery){jQuery(function(){\n';

  var thisLength = this.length;
  for(var ixCnt=0; ixCnt<thisLength; ixCnt++){ // Loop for length of ixs.

    // Loop for length of actions in the ix, then get the command names.
    for(var k=0; k<ixedit.ixs[ixCnt].actions.length; k++){
      var theCommandName = ixedit.ixs[ixCnt].actions[k].command;
      if(!usedCommands[theCommandName]){
        usedCommands[theCommandName]=ixedit.cmds[theCommandName];
      }
    };

    // Gather ix.code, then generate script string.
    if(isIncludingComments){ // If including comment.
      var theComment = this[ixCnt].code.comment;
      if(theComment != ''){ // If there is a comment.
        var insertingComment = theComment.replace(/\n/g,'\n\t\t\/\/ ');
        insertingComment = '\t\t\/\/ ' + insertingComment + '\n';
      } else { // If there is no comment.
        var insertingComment = '';
      };
      theCodes[theCodes.length] = insertingComment + '\t\t' + this[ixCnt].code.source + '\n';
    } else { // If not including comment.
      theCodes[theCodes.length] = '\t\t' + this[ixCnt].code.source + '\n';
    }
  };

  // Gather cms.preserve
  for(var i in usedCommands){
    if(ixedit.cmds[i] && ixedit.cmds[i].preserve && ixedit.cmds[i].preserv!=''){ //Put preserve into the array.
      preserves[preserves.length] = ixedit.cmds[i].preserve;
    }
  };
  if(preserves.length>0){ // If there is a preserve.
    var preservedCode = '\t\t' + preserves.join('\n\t\t') + '\n' ;
  }else{
    var preservedCode = '';
  };

  var suffix = '\t})};\n</script>';

  return prefix + preservedCode + theCodes.join('') + suffix;
};

// Select optin object.
ixedit.selectOptions = new Object();

// CMDS OBJECT
ixedit.cmds = new Object(); // This is for cmd instances

// CONDCMDS OBJECT
ixedit.condcmds = new Object(); // This is for condcmd instances.

// LOSTWORLD OBJECT
ixedit.lostWorld = new Object(); // This is a jQuery object and for pre-buffering when loading page.





// ========== CLASSES ========== 

// ---- IX CLASS

ixedit.ix = function(){
  this.name = '';
  this.screenName = '';
  this.active = true;
  this.trigger = '';
  this.screenTrigger = this.trigger;
  this.event = 'click';
  this.screenEvent = '';
  this.preventDefault = false;
  this.stopBubbling = false;
  this.target = '';
  this.screenTarget = '';
  this.delay = 0;
  this.screenDelay = '';
  this.comment = '';
  this.screenComment = '';
  this.conditions = new Array(); //conditions = [{'type':'string', 'target':'string', 'command':'string', 'params':[attr1, ...]}, ...]
  this.actions = new Array(); //actions = [{'command':'string', 'params':['command attributes'], 'subparams':[['aaa':'bbb'],['ccc':'ddd']]}, ...]
  this.screenActions = '';
};

// Generate JavaScript code from each ix and bind it.
ixedit.ix.prototype.set = function(){
  var isToRealtimeBinding = false; // Realtime binding?
  this.func = function(){}; // Initialize ix.func
  this.code = new Object();

  // Make vars from current ix to use them within the binding functions.
  var theIx = this;
  var theEvent = theIx.event;
  var theStopBubbling = theIx.stopBubbling;
  var theTrigger = theIx.trigger;
  var theComment = theIx.comment;
  var theLostWorld = ixedit.lostWorld;
  var isLive = false;

  // Detect if this can be realtime-bound.
  // If there is no trigger, you get an error.
  if(theEvent == 'load' || theEvent == 'unload') { // load or unload event?
    isToRealtimeBinding = true;
  } else { // Another event?
    if(theTrigger != ''){ // If you have a trigger.
      isToRealtimeBinding = true; // OK, realtime bind.
    }
  };

  // Eval theFuncCode string
  function getFunked(funcCode){
    if(theStopBubbling){ // If stop bubbling
      // You can not eval if you insert 'return false' when generating funcCode
      // So insert it within this getFunked function.
      var funked = function(event, ui){ eval(funcCode); event.stopPropagation(); };
    }else{
      var funked = function(event, ui){ eval(funcCode) };
    };
    return funked;
  };


  // Prepare the final code generating.
  // There are two codes. One is for realtime bining. One is for deploying.
  // For realtime one, add code of excluding ixedit-dialog and make connection with ix.funcs.
  // For deploy one, make it as a text string and let the comment be inserted.

  // Prefix
  if(theEvent=='load') {
    var chainPrefix0 = ''; // for realtime binding
    var chainPrefix1 = ''; // for deploying
  } else if(theEvent=='unload') {
    var chainPrefix0 = 'jQuery(window)';
    var chainPrefix1 = 'jQuery(window)';
  } else {
    if(theTrigger=='window'){
      var chainPrefix0 = 'jQuery(window)';
      var chainPrefix1 = 'jQuery(window)';
    }else{
      var chainPrefix0 = 'var theIxeditDialog = jQuery(\'.ixedit-dialog\'); jQuery(\'' + theTrigger + '\')' + '.not(theIxeditDialog.add(jQuery(\'*\', theIxeditDialog)))';
      //var chainPrefix0 = 'var theIxeditDialog = jQuery(\'.ixedit-dialog\'); jQuery(\'' + theTrigger + '\')' + '.not(\'div\')';
      //var chainPrefix0 = 'jQuery(\'' + theTrigger + '\')';

      var chainPrefix1 = 'jQuery(\'' + theTrigger + '\')';
    };
  };

  // Middle0 (for realtime binding)
  if(theEvent=='load') {
    var chainMiddle0 = '';
  } else if(theTrigger == 'window' || theTrigger == 'html' || theTrigger == 'body' || jQuery(theTrigger, theLostWorld).length > 0){ // If initial DOM has the trigger.
    var chainMiddle0 = '.on(\'' + theEvent + '\', '; // Use bind.
  } else { // else
    var chainMiddle0 = '.live(\'' + theEvent + '\', '; // User live.
    var isLive = true;
  };

  // Mddle1 (for deploying)
  if(theEvent=='load') {
    var chainMiddle1 = '';
  } else if(theTrigger == 'window' || theTrigger == 'html' || theTrigger == 'body' || jQuery(theTrigger, theLostWorld).length > 0){  // If initial DOM has the trigger.
    var chainMiddle1 = '.on(\'' + theEvent + '\', function(event, ui){'; // Use bind.
  } else { // else
    var chainMiddle1 = '.live(\'' + theEvent + '\', function(event, ui){'; // User live.
  };
  // Middle2 (for deploying)
  if(theEvent=='load') {
    var chainMiddle2 = '; ';
  } else {
    var chainMiddle2 = '})';
  };
  // Middle3 (for realtime binding)
  if(theEvent=='load') {
    var chainMiddle3 = '(); ';
  } else {
    var chainMiddle3 = ')';
  };
  // Suffix
  if(theEvent=='load') {
    var chainSuffix = '';
  } else {
    var chainSuffix = ';';
  };


  // Generate command string
  var theFuncCodesArray0 = new Array(); // Code for realtime binding.
  var theFuncCodesArray1 = new Array(); // Code for deploying.
  var thisActionsLength = this.actions.length;
  var usedCommands = new Object();

  for(var actnCnt=0; actnCnt<thisActionsLength; actnCnt++) { //Loop for the length of action.

    var theCommandName = this.actions[actnCnt].command;
    if(!usedCommands[theCommandName]){
      usedCommands[theCommandName]=ixedit.cmds[theCommandName];
    };

    // Command string.
    var funcStrings = this.retrieveAction(this.actions[actnCnt], isLive); // Two strings (realtime and deploy) will be returned as an array.
    if(funcStrings.length==2 && funcStrings[0]!='' && funcStrings[1]!=''){ // If there are codes.
      theFuncCodesArray0[theFuncCodesArray0.length] = funcStrings[0]; // Place realtime one outside this function.
      theFuncCodesArray1[theFuncCodesArray1.length] = funcStrings[1]; // Place deploy one outside this function.
    }
  };

  var theJoinedFuncString0 = theFuncCodesArray0.join('; ');
  var theJoinedFuncString1 = theFuncCodesArray1.join('; ');

  if(this.preventDefault){ // Additional code for preventDefault.
    theJoinedFuncString0 += '; event.preventDefault()';
    theJoinedFuncString1 += '; event.preventDefault()';
  };

  if(this.stopBubbling){ // Additional code for stopBubbling.
    // 'return false' for realtime binding is inserted within getFunked function.
    theJoinedFuncString1 += '; event.stopPropagation()'; // for deploying code.
  };

  function addCondition(theIx, theString){
    if(theIx.conditions && theIx.conditions.length>0){ // If there is a condition.
      var builtConds = theIx.retrieveCondition(isLive);
      var theCode = 'if(' + builtConds + '){' + theString + '}';
    } else { // If there is no condition.
      var theCode = theString;
    };
    return theCode;
  };
  
  theJoinedFuncString0 = addCondition(theIx, theJoinedFuncString0);
  theJoinedFuncString1 = addCondition(theIx, theJoinedFuncString1);
    if(this.active){ // If this ix is active.
      // Place the function as this.func. This is to be used when unbinding.
      this.func = getFunked(theJoinedFuncString0);
    };

  if(this.active){ // If this ix is active.
    // Generate code for realtime binding as text string.
    var finalString0 = chainPrefix0 + chainMiddle0 + 'this.func' + chainMiddle3 + chainSuffix;
    // e.g. jQuery('#box1').on('click', this.funcs[0]);
  };

  // Generate code for deploying as text string.
  var finalString1 = '(function(){ ' + chainPrefix1 + chainMiddle1+ theJoinedFuncString1 + chainMiddle2 + chainSuffix + '})();';

  // Generate preserve string for realtime binding. One for deploying is generated within ixedit.ixs.getJqueryCode.
  var preserves = new Array();
  for(var s in usedCommands){
    if(ixedit.cmds[s] && ixedit.cmds[s].preserve && ixedit.cmds[s].preserv!=''){ // If there is a perserve sting, place it into an array.
      preserves[preserves.length] = ixedit.cmds[s].preserve;
    }
  };
  var preservedCode = preserves.join(';');


  // Add the code for deploying to this.codes
  // Then do realtime bind now.

  this.code.comment = theComment;
  if(this.active){
    this.code.source = finalString1;
    if(isToRealtimeBinding == true){ // If the flag realtime-binding.
      eval(preservedCode);
      eval(finalString0); // Do realtime binding.
    };
  } else {
    this.code.source = '// ' + finalString1; // Comment out if the ix is not active.
  };

};

// Unbind ix by using ix.func.
ixedit.ix.prototype.unset = function(){

  var thisFunc = this.func;
  var thisTrigger = this.trigger;
  var thisEvent = this.event;


  // So, about trigger, remove space(s) before and after '+.'
  // If that bug is fixed in the future, next 5 lines are not needed.
  thisTrigger = thisTrigger.replace(/   /g,' '); // 3 spaces to 1
  thisTrigger = thisTrigger.replace(/  /g,' '); // 2 spaced to 1
  thisTrigger = thisTrigger.replace(/  /g,' '); // 2 spaced to 1
  thisTrigger = thisTrigger.replace(/ \+/g,'\+'); // ' +' to '+'
  thisTrigger = thisTrigger.replace(/\+ /g,'\+');  // '+ ' to '+'

  jQuery(thisTrigger).off(thisEvent, thisFunc);
  if(this.code && this.code.source){
    this.code.source = '// ' + this.code.source;  
  }
};



// Action Retriever
ixedit.ix.prototype.retrieveAction = function(action, isLive){
  var target = action.target;
  var delay = action.delay;
  var command = action.command;
  var attributes = action.params; //as array
  var attributesSub = action.subparams; //as array;
  
  if(!target || target==''){
    target = '<anonymous></anonymous>';
  };
  
  if(!command){/*window.alert('No Command');*/ return []}; // You need a command.
  if(!attributes){/*window.alert('No Attributes');*/ return []}; // You need a set of attributes.
  if(delay==null){ // You need a delay
    delay=0;
  }else if(!delay){
    delay=0;
  };


  // Rosetta!
  if( ixedit.advancedMode ) {
    if( this.event == 'load' && target == 'secret about unchain' && command == 'show') {
      $('#ixedit-dialog-main').addClass('ixedit-dialog-aboutbox');
    };
  };

  // Retrieve command from ixedit.cmds
  if(ixedit.cmds[command]){
    var theCmd = ixedit.cmds[command];
  }else{ // If it is unidentified.
    return []; // Ignore.
  };

  var theCommandString = theCmd.func(attributes, attributesSub); // Generate command string by using the function of cmd instance.
  // theCommandString will be like "css('background-color','red')"



  // Specifying the target
  if(isLive){
    var targetStr = 'target';
  }else{
    var targetStr = 'currentTarget';
  };
  if(target=='this'){ // If the target is 'this'.
    var exc = 'var ixeditDialog = jQuery(\'.ixedit-dialog\'); ';
    var targetingForRealtimeBinding = 'var target = jQuery(event.' + targetStr + ').not(ixeditDialog.add(jQuery(\'*\', ixeditDialog))); ';
    var targetingForDeploy = 'var target = jQuery(event.' + targetStr + '); ';
  }else if(target=='drop'){ // If the target is 'drop'.
    var exc = 'var ixeditDialog = jQuery(\'.ixedit-dialog\'); ';
    var targetingForRealtimeBinding = 'var target = ui.draggable.not(ixeditDialog.add(jQuery(\'*\', ixeditDialog))); ';
    var targetingForDeploy = 'var target = ui.draggable; ';
  }else{ // else
    var exc = 'var ixeditDialog = jQuery(\'.ixedit-dialog\'); ';
    var targetingForRealtimeBinding = 'var target = jQuery(\'' + target + '\').not(ixeditDialog.add(jQuery(\'*\', ixeditDialog))); ';
    var targetingForDeploy = 'var target = jQuery(\'' + target + '\'); ';
  };

  var targetPlusCommandString = 'target.' + theCommandString;

  if(theCmd.dontNeedTarget==true){ // If the command dont need a target.
    exc = '';
    targetingForRealtimeBinding = '';
    targetingForDeploy = '';
    targetPlusCommandString = theCommandString;
  };

  var funcStrings = new Array();

  // If the delay>0 or there is a condition.
  if(delay > 0 || this.conditions.length > 0){
    funcStrings[0] = 'setTimeout(function(){' + exc + targetingForRealtimeBinding + targetPlusCommandString + '}, ' + delay + ')'; //For realtime binding.
    funcStrings[1] = 'setTimeout(function(){' + targetingForDeploy + targetPlusCommandString + '}, ' + delay + ')'; // For deploying.
  } else {
    funcStrings[0] = exc + targetingForRealtimeBinding + targetPlusCommandString; // For realtime binding.
    funcStrings[1] = targetingForDeploy + targetPlusCommandString; // For deploying.
  };


  return funcStrings; // Returning an array of function strings.
};


// Condition Retriever
ixedit.ix.prototype.retrieveCondition = function(isLive){
  var conditions = this.conditions;
  var builtConds = '';  

  var conditionsLength = conditions.length;
  for(var condCnt=0; condCnt<conditionsLength; condCnt++){
    var cType = conditions[condCnt].type;
    var cTarget = conditions[condCnt].target;
    var cCommand = conditions[condCnt].command;
    var cAttributes = conditions[condCnt].params;

    // Retrive a command from ixedit.condcmds.
    if(ixedit.condcmds[cCommand]){
      var theCmd = ixedit.cmds[cCommand];
    }else{ // If it is unidentified.
      return []; // Ignore.
    };

    // If the target is blank, specify body because it causes an error.
    if(cTarget=='') {
      cTarget = 'body';
    };

    // Find a cond cmd instance whose name matches the cCommand.
    var theCondCmd = ixedit.condcmds[cCommand];

    if(isLive){
      var targetStr = 'target';
    }else{
      var targetStr = 'currentTarget';
    };

    if(cTarget=='this'){
      var targetString = 'jQuery(event.' + targetStr + ')';
    }else if(cTarget=='drop'){
      var targetString='ui.draggable';
    }else if(cTarget.substr(0,6)=='event.'){
      var targetString=cTarget;
    }else{
      var targetString = 'jQuery(\'' + cTarget + '\')';
    };

    if(cType == 'if'){
      var eq = '==';
    } else {
      var eq = '!=';
    };

    var currentCond = theCondCmd.funcStr(targetString, cAttributes, eq);
    if(builtConds == ''){
      builtConds = currentCond;
    } else {
      builtConds = builtConds + ' && ' + currentCond;
    };
  };
  return builtConds;
};

ixedit.ix.prototype.execute = function(){
  for (var actnCnt=0; actnCnt<this.actions.length; actnCnt++) {
    var theCommandString = this.retrieveAction(this.actions[actnCnt]);
    eval('jQuery(this.target).' + theCommandString);
  }
};




// ---- CMD CLASS

ixedit.cmd = function(){
  this.name = ''; // name
  this.screenName = ''; // screen name
  this.category = ''; // Grouping category in the command list
  this.attrs = new Array(); // HTML source for form UI
  this.help = ''; // HTML source for command help
  this.dontNeedTarget = false; // Need target selector?
  this.dontNeedDelay = false; // Need delay?
  this.preserve = ''; // JavaScript source to be inserted outside the command when deploying
  this.func = function(){}; // Logic to generate command string
  this.initFunc = function(){}; // Function to be executed when the form UI is generated
  this.afterValueLoadedFunc = function(){}; // Function to be executed when the attributes are loaded into form UI
};

// Make parameter for jQuery effects.
ixedit.cmd.prototype.effectParams = function(effactName, speed){
  switch(effactName){
    case 'blind-v':
      var subCmd = 'blind';
      var params = '{ direction: \'vertical\' }';
      break;
    case 'blind-h':
      var subCmd = 'blind';
      var params = '{ direction: \'horizontal\' }';
      break;
    case 'clip-v':
      var subCmd = 'clip';
      var params = '{ direction: \'vertical\' }';
      break;
    case 'clip-h':
      var subCmd = 'clip';
      var params = '{ direction: \'horizontal\' }';
      break;
    case 'drop-l':
      var subCmd = 'drop';
      var params = '{ direction: \'left\' }';
      break;
    case 'drop-r':
      var subCmd = 'drop';
      var params = '{ direction: \'right\' }';
      break;
    case 'drop-u':
      var subCmd = 'drop';
      var params = '{ direction: \'up\' }';
      break;
    case 'drop-d':
      var subCmd = 'drop';
      var params = '{ direction: \'down\' }';
      break;
    case 'explode':
      var subCmd = 'explode';
      var params = '{ pieces: 9 }';
      break;
    case 'fold':
      var subCmd = 'fold';
      var params = '{ size: 40 }';
      break;
    case 'puff':
      var subCmd = 'puff';
      var params = '{ percent: 150 }';
      break;
    case 'slide-l':
      var subCmd = 'slide';
      var params = '{ direction: \'left\' }';
      break;
    case 'slide-r':
      var subCmd = 'slide';
      var params = '{ direction: \'right\' }';
      break;
    case 'slide-u':
      var subCmd = 'slide';
      var params = '{ direction: \'up\' }';
      break;
    case 'slide-d':
      var subCmd = 'slide';
      var params = '{ direction: \'down\' }';
      break;
    case 'scale':
      var subCmd = 'scale';
      var params = '{ }'; // default: 0/100
      break;
    case 'pulsate':
      var subCmd = 'pulsate';
      var params = '{ times: 3 }';
      break;
    default:
      var subCmd = '';
      var params = '';
      break;
  };
    
  if(subCmd != ''){ // If there is an effect, make jQuery syntax by using the parameter.
    var commandString = this.name + '(' + '\'' + subCmd + '\'' + ', ' + params + ', ' + speed + '' + ')';
  } else { // If there is no effect, make jQuery syntax without parameter.
    var commandString = this.name + '(' + speed + ')';
  };
  return commandString;

};

// Prototype function to generate input controls as jQuery objects for each command attributes.
ixedit.cmd.prototype.jqueryObj = function(actionNo){
  // Action Number is not used now.

  var theAttrsArea = jQuery('<div class="ixedit-attrsarea ixedit-attrsarea-' + this.name + '"></div>'); // Need this div for switching show/hide.
  if(this.attrs.length > 0){ // If there is an attribute
    
    var theHTML = new Array();

    var thisAttrsLength = this.attrs.length;
    for(var a=0; a<thisAttrsLength; a++){ // Loop for the length of attributes
      var number = a+1; // Define current loop number first to use it as string later. The index of attribute controls is 1-based.
      var theAttr = this.attrs[a]; // Put the target attribute (to make HTML) into theAttr.
      // cmd.attrs property format is like this;
      // [[first prefix string, first attribute options, first suffix], [second prefix string, second attribute options, second suffix], .....]

      switch(typeof(theAttr[1])){ // Swich operation by looking at the type of attribute (second value of cmd.attrs array).
        case 'string': // String
          if(theAttr[1]==''){ // If attribute is blank, make a textbox.
            theHTML[theHTML.length] = theAttr[0] + '<input type="text" class="ixedit-inputitem ixedit-' + this.name + '-' + number + '" value="" />' + theAttr[2];
          };
          break;
        case 'boolean': // Boolean
          if(theAttr[1]==true){
            var checking = ' checked="checked" '; // Make a checkbox and check it.
          } else {
            var checking = ''; // Make a checkbox.
          };
          theHTML[theHTML.length] = theAttr[0] + '<input type="checkbox" class="ixedit-inputitem ixedit-' + this.name + '-' + number + '"' + checking + ' />' + theAttr[2];

          break;
        case 'object': // Array or Object
          theHTML[theHTML.length] = theAttr[0] + '<select class="ixedit-inputitem ixedit-' + this.name + '-' + number + '">' + ixedit.arrayToOptions(theAttr[1]) + '</select>' + theAttr[2];
          break;
        case 'function': // Function
          theHTML[theHTML.length] = theAttr[0] + theAttr[1](this) + theAttr[2]; // Execute using this as the argument. HTML string should be returned.
          break;
        default:
          // window.alert('Huh?');
          break;
      }
    };
    theAttrsArea.append(jQuery(theHTML.join(''))); // Append joined HTML string to the div.
  };
  return theAttrsArea;
};





// ---- CONDCMD CLASS

ixedit.condcmd = function(){
  this.name = '';
  this.screenName = '';
  this.attrSelects = new Array(); // [[optionsArray1], '', ...]  Array is to be a dropdown menu. Blank text is to be a textbox.
};



// Prototype function to generate input controls as jQuery objects for each condition command attributes.
ixedit.condcmd.prototype.jqueryObj = function(){
  if(this.attrs.length > 0){ // If there is an attribute
    var theAttrsArea = jQuery('<div class="ixedit-cond-attrsarea ixedit-cond-attrsarea-' + this.name + '"></div>'); // Need this div for switching show/hide.
    var theHTML = '';

    var thisAttrsLength = this.attrs.length;
    for(var a=0; a<thisAttrsLength; a++){ // Loop for the length of attributes
      var number = a+1; // Define current loop number first to use it as string later. The index of attribute controls is 1-based.
      var theAttr = this.attrs[a]; // Put the target attribute (to make HTML) into theAttr.
      switch(typeof(theAttr[1])){ // Swich operation by looking at the type of attribute (second value of cmd.attrs array).
        case 'string': // String
          if(theAttr[1]==''){ // If attribute is blank, make a textbox.
            theHTML += theAttr[0] + '<input type="text" class="ixedit-inputitem ixedit-cond-input-' + this.name + '-' + number + '" value="" />' + theAttr[2];
          };
          break;
        case 'object': // Array or Object
          theHTML += theAttr[0] + '<select class="ixedit-inputitem ixedit-cond-input-' + this.name + '-' + number + '">' + ixedit.arrayToOptions(theAttr[1]) + '</select>' + theAttr[2];
          break;
        default:
          // window.alert('Huh?');
          break;
      }
    };
    theAttrsArea.append(jQuery(theHTML)); // Append joined HTML string to the div.
    return theAttrsArea;
  }
};





// ---- LISTITEM CLASS
ixedit.listItem = function(){
  this.active = '';
  this.trigger = '';
  this.event = '';
  this.target = '';
  this.delay = '';
  this.comment = '';
  this.command = '';
  this.condition = '';
};







// ---------- IxEdit Functions


// Pre-assigning select options.
ixedit.preAssignSelectOptions = function(){
  var options = this.selectOptions;
  var label = this.label;

  options.eventHandlers = [[label.eventLoad, 'load'], [label.eventUnload, 'unload'], [label.eventChange, 'change'], [label.eventClick, 'click'], [label.eventDblClick, 'dblclick'], [label.eventDrop, 'drop'], /*[label.eventError, 'error'], */[label.eventFocus, 'focus'], [label.eventFocusOut, 'blur'], /*[label.eventKeyDown, 'keydown'], [label.eventKeyPress, 'keypress'], */[label.eventKeyUp, 'keyup'], [label.eventMouseDown, 'mousedown'], [label.eventMouseMove, 'mousemove'], [label.eventMouseOut, 'mouseout'], [label.eventMouseOver, 'mouseover'], [label.eventMouseUp, 'mouseup'], [label.eventResize, 'resize'], [label.eventScroll, 'scroll'], [label.eventSelect, 'select'], [label.eventSubmit, 'submit']];

  options.eventHandlersForAccordion = [[label.eventClick, 'click'], [label.eventDblClick, 'dblclick'], [label.eventMouseDown, 'mousedown'], [label.eventMouseOver, 'mouseover'], [label.eventMouseUp, 'mouseup']];

  options.cssProperties = [['background', 'background'], ['background-attachment', 'background-attachment'], ['background-color', 'background-color'], ['background-image', 'background-image'], ['background-position', 'background-position'], ['background-repeat', 'background-repeat'], ['border', 'border'], ['border-bottom', 'border-bottom'], ['border-bottom-color', 'border-bottom-color'], ['border-bottom-style', 'border-bottom-style'], ['border-bottom-width', 'border-bottom-width'], ['border-collapse', 'border-collapse'], ['border-color', 'border-color'], ['border-left', 'border-left'], ['border-left-color', 'border-left-color'], ['border-left-style', 'border-left-style'], ['border-left-width', 'border-left-width'], ['border-right', 'border-right'], ['border-right-color', 'border-right-color'], ['border-right-style', 'border-right-style'], ['border-right-width', 'border-right-width'], ['border-spacing', 'border-spacing'], ['border-style', 'border-style'], ['border-top', 'border-top'], ['border-top-color', 'border-top-color'], ['border-top-style', 'border-top-style'], ['border-top-width', 'border-top-width'], ['border-width', 'border-width'], ['bottom', 'bottom'], ['caption-side', 'caption-side'], ['clear', 'clear'], ['clip', 'clip'], ['color', 'color'], ['content', 'content'], ['counter-increment', 'counter-increment'], ['counter-reset', 'counter-reset'], ['cursor', 'cursor'], ['direction', 'direction'], ['display', 'display'], ['empty-cells', 'empty-cells'], ['float', 'float'], ['font', 'font'], ['font-family', 'font-family'], ['font-size', 'font-size'], ['font-style', 'font-style'], ['font-variant', 'font-variant'], ['font-weight', 'font-weight'], ['height', 'height'], ['left', 'left'], ['letter-spacing', 'letter-spacing'], ['line-height', 'line-height'], ['list-style', 'list-style'], ['list-style-image', 'list-style-image'], ['list-style-position', 'list-style-position'], ['list-style-type', 'list-style-type'], ['margin', 'margin'], ['margin-bottom', 'margin-bottom'], ['margin-left', 'margin-left'], ['margin-right', 'margin-right'], ['margin-top', 'margin-top'], ['max-height', 'max-height'], ['max-width', 'max-width'], ['min-height', 'min-height'], ['min-width', 'min-width'], ['outline', 'outline'], ['outline-color', 'outline-color'], ['outline-style', 'outline-style'], ['outline-width', 'outline-width'], ['overflow', 'overflow'], ['padding', 'padding'], ['padding-bottom', 'padding-bottom'], ['padding-left', 'padding-left'], ['padding-right', 'padding-right'], ['padding-top', 'padding-top'], ['position', 'position'], ['quotes', 'quotes'], ['right', 'right'], ['table-layout', 'table-layout'], ['text-align', 'text-align'], ['text-decoration', 'text-decoration'], ['text-indent', 'text-indent'], ['text-transform', 'text-transform'], ['top', 'top'], ['unicode-bidi', 'unicode-bidi'], ['vertical-align', 'vertical-align'], ['visibility', 'visibility'], ['white-space', 'white-space'], ['width', 'width'], ['word-spacing', 'word-spacing'], ['z-index', 'z-index']];

/* Including CSS 3 Properties */
  options.cssProperties = [['alignment-adjust', 'alignment-adjust'], ['alignment-baseline', 'alignment-baseline'], ['animation', 'animation'], ['animation-delay', 'animation-delay'], ['animation-direction', 'animation-direction'], ['animation-duration', 'animation-duration'], ['animation-iteration-count', 'animation-iteration-count'], ['animation-name', 'animation-name'], ['animation-play-state', 'animation-play-state'], ['animation-timing-function', 'animation-timing-function'], ['appearance', 'appearance'], ['azimuth', 'azimuth'], ['background', 'background'], ['background-attachment', 'background-attachment'], ['background-break', 'background-break'], ['background-clip', 'background-clip'], ['background-color', 'background-color'], ['background-image', 'background-image'], ['background-origin', 'background-origin'], ['background-position', 'background-position'], ['background-repeat', 'background-repeat'], ['background-size', 'background-size'], ['baseline-shift', 'baseline-shift'], ['binding', 'binding'], ['bookmark-label', 'bookmark-label'], ['bookmark-level', 'bookmark-level'], ['bookmark-target', 'bookmark-target'], ['border', 'border'], ['border-bottom', 'border-bottom'], ['border-bottom-color', 'border-bottom-color'], ['border-bottom-left-radius', 'border-bottom-left-radius'], ['border-bottom-right-radius', 'border-bottom-right-radius'], ['border-bottom-style', 'border-bottom-style'], ['border-bottom-width', 'border-bottom-width'], ['border-break', 'border-break'], ['border-collapse', 'border-collapse'], ['border-color', 'border-color'], ['border-image', 'border-image'], ['border-left', 'border-left'], ['border-left-color', 'border-left-color'], ['border-left-style', 'border-left-style'], ['border-left-width', 'border-left-width'], ['border-length', 'border-length'], ['border-radius', 'border-radius'], ['border-right', 'border-right'], ['border-right-color', 'border-right-color'], ['border-right-style', 'border-right-style'], ['border-right-width', 'border-right-width'], ['border-spacing', 'border-spacing'], ['border-style', 'border-style'], ['border-top', 'border-top'], ['border-top-color', 'border-top-color'], ['border-top-left-radius', 'border-top-left-radius'], ['border-top-right-radius', 'border-top-right-radius'], ['border-top-style', 'border-top-style'], ['border-top-width', 'border-top-width'], ['border-width', 'border-width'], ['bottom', 'bottom'], ['box-align', 'box-align'], ['box-direction', 'box-direction'], ['box-flex', 'box-flex'], ['box-flex-group', 'box-flex-group'], ['box-lines', 'box-lines'], ['box-ordinal-group', 'box-ordinal-group'], ['box-orient', 'box-orient'], ['box-pack', 'box-pack'], ['box-shadow', 'box-shadow'], ['box-sizing', 'box-sizing'], ['caption-side', 'caption-side'], ['clear', 'clear'], ['clip', 'clip'], ['color', 'color'], ['color-profile', 'color-profile'], ['column-break-after', 'column-break-after'], ['column-break-before', 'column-break-before'], ['column-count', 'column-count'], ['column-fill', 'column-fill'], ['column-gap', 'column-gap'], ['column-rule', 'column-rule'], ['column-rule-color', 'column-rule-color'], ['column-rule-style', 'column-rule-style'], ['column-rule-width', 'column-rule-width'], ['column-span', 'column-span'], ['column-width', 'column-width'], ['columns', 'columns'], ['content', 'content'], ['counter-increment', 'counter-increment'], ['counter-reset', 'counter-reset'], ['crop', 'crop'], ['cue', 'cue'], ['cue-after', 'cue-after'], ['cue-before', 'cue-before'], ['cursor', 'cursor'], ['direction', 'direction'], ['display', 'display'], ['display-model', 'display-model'], ['display-role', 'display-role'], ['dominant-baseline', 'dominant-baseline'], ['drop-initial-after-adjust', 'drop-initial-after-adjust'], ['drop-initial-after-align', 'drop-initial-after-align'], ['drop-initial-before-adjust', 'drop-initial-before-adjust'], ['drop-initial-before-align', 'drop-initial-before-align'], ['drop-initial-size', 'drop-initial-size'], ['drop-initial-value', 'drop-initial-value'], ['elevation', 'elevation'], ['empty-cells', 'empty-cells'], ['fit', 'fit'], ['fit-position', 'fit-position'], ['float', 'float'], ['float-offset', 'float-offset'], ['font', 'font'], ['font-family', 'font-family'], ['font-size', 'font-size'], ['font-size-adjust', 'font-size-adjust'], ['font-stretch', 'font-stretch'], ['font-style', 'font-style'], ['font-variant', 'font-variant'], ['font-weight', 'font-weight'], ['grid-columns', 'grid-columns'], ['grid-rows', 'grid-rows'], ['hanging-punctuation', 'hanging-punctuation'], ['height', 'height'], ['hyphenate-after', 'hyphenate-after'], ['hyphenate-before', 'hyphenate-before'], ['hyphenate-character', 'hyphenate-character'], ['hyphenate-lines', 'hyphenate-lines'], ['hyphenate-resource', 'hyphenate-resource'], ['hyphens', 'hyphens'], ['icon', 'icon'], ['image-orientation', 'image-orientation'], ['image-resolution', 'image-resolution'], ['inline-box-align', 'inline-box-align'], ['left', 'left'], ['letter-spacing', 'letter-spacing'], ['line-height', 'line-height'], ['line-stacking', 'line-stacking'], ['line-stacking-ruby', 'line-stacking-ruby'], ['line-stacking-shift', 'line-stacking-shift'], ['line-stacking-strategy', 'line-stacking-strategy'], ['list-style', 'list-style'], ['list-style-image', 'list-style-image'], ['list-style-position', 'list-style-position'], ['list-style-type', 'list-style-type'], ['margin', 'margin'], ['margin-bottom', 'margin-bottom'], ['margin-left', 'margin-left'], ['margin-right', 'margin-right'], ['margin-top', 'margin-top'], ['mark', 'mark'], ['mark-after', 'mark-after'], ['mark-before', 'mark-before'], ['marks', 'marks'], ['marquee-direction', 'marquee-direction'], ['marquee-play-count', 'marquee-play-count'], ['marquee-speed', 'marquee-speed'], ['marquee-style', 'marquee-style'], ['max-height', 'max-height'], ['max-width', 'max-width'], ['min-height', 'min-height'], ['min-width', 'min-width'], ['move-to', 'move-to'], ['nav-down', 'nav-down'], ['nav-index', 'nav-index'], ['nav-left', 'nav-left'], ['nav-right', 'nav-right'], ['nav-up', 'nav-up'], ['opacity', 'opacity'], ['orphans', 'orphans'], ['outline', 'outline'], ['outline-color', 'outline-color'], ['outline-offset', 'outline-offset'], ['outline-style', 'outline-style'], ['outline-width', 'outline-width'], ['overflow', 'overflow'], ['overflow-style', 'overflow-style'], ['overflow-x', 'overflow-x'], ['overflow-y', 'overflow-y'], ['padding', 'padding'], ['padding-bottom', 'padding-bottom'], ['padding-left', 'padding-left'], ['padding-right', 'padding-right'], ['padding-top', 'padding-top'], ['page', 'page'], ['page-break-after', 'page-break-after'], ['page-break-before', 'page-break-before'], ['page-break-inside', 'page-break-inside'], ['page-policy', 'page-policy'], ['pause', 'pause'], ['pause-after', 'pause-after'], ['pause-before', 'pause-before'], ['phonemes', 'phonemes'], ['pitch', 'pitch'], ['pitch-range', 'pitch-range'], ['play-during', 'play-during'], ['position', 'position'], ['presentation-level', 'presentation-level'], ['punctuation-trim', 'punctuation-trim'], ['quotes', 'quotes'], ['rendering-intent', 'rendering-intent'], ['resize', 'resize'], ['rest', 'rest'], ['rest-after', 'rest-after'], ['rest-before', 'rest-before'], ['richness', 'richness'], ['right', 'right'], ['rotation', 'rotation'], ['rotation-point', 'rotation-point'], ['ruby-align', 'ruby-align'], ['ruby-overhang', 'ruby-overhang'], ['ruby-position', 'ruby-position'], ['ruby-span', 'ruby-span'], ['size', 'size'], ['speak', 'speak'], ['speak-header', 'speak-header'], ['speak-numeral', 'speak-numeral'], ['speak-punctuation', 'speak-punctuation'], ['speech-rate', 'speech-rate'], ['stress', 'stress'], ['string-set', 'string-set'], ['tab-side', 'tab-side'], ['table-layout', 'table-layout'], ['target', 'target'], ['target-name', 'target-name'], ['target-new', 'target-new'], ['target-position', 'target-position'], ['text-align', 'text-align'], ['text-align-last', 'text-align-last'], ['text-decoration', 'text-decoration'], ['text-emphasis', 'text-emphasis'], ['text-height', 'text-height'], ['text-indent', 'text-indent'], ['text-justify', 'text-justify'], ['text-outline', 'text-outline'], ['text-replace', 'text-replace'], ['text-shadow', 'text-shadow'], ['text-transform', 'text-transform'], ['text-wrap', 'text-wrap'], ['top', 'top'], ['transition', 'transition'], ['transition-delay', 'transition-delay'], ['transition-duration', 'transition-duration'], ['transition-property', 'transition-property'], ['transition-timing-function', 'transition-timing-function'], ['unicode-bidi', 'unicode-bidi'], ['vertical-align', 'vertical-align'], ['visibility', 'visibility'], ['voice-balance', 'voice-balance'], ['voice-duration', 'voice-duration'], ['voice-family', 'voice-family'], ['voice-pitch', 'voice-pitch'], ['voice-pitch-range', 'voice-pitch-range'], ['voice-rate', 'voice-rate'], ['voice-stress', 'voice-stress'], ['voice-volume', 'voice-volume'], ['volume', 'volume'], ['white-space', 'white-space'], ['white-space-collapse', 'white-space-collapse'], ['widows', 'widows'], ['width', 'width'], ['word-break', 'word-break'], ['word-spacing', 'word-spacing'], ['word-wrap', 'word-wrap'], ['z-index', 'z-index'], ['-webkit-border-radius', '-webkit-border-radius']];

  options.elementAttrs = [['abbr', 'abbr'], ['accept', 'accept'], ['accept-charset', 'accept-charset'], ['accesskey', 'accesskey'], ['action', 'action'], ['align', 'align'], ['alink', 'alink'], ['alt', 'alt'], ['archive', 'archive'], ['axis', 'axis'], ['background', 'background'], ['bgcolor', 'bgcolor'], ['border', 'border'], ['cellpadding', 'cellpadding'], ['cellspacing', 'cellspacing'], ['char', 'char'], ['charoff', 'charoff'], ['charset', 'charset'], ['checked', 'checked'], ['cite', 'cite'], ['class', 'class'], ['classid', 'classid'], ['clear', 'clear'], ['code', 'code'], ['codebase', 'codebase'], ['codetype', 'codetype'], ['color', 'color'], ['cols', 'cols'], ['colspan', 'colspan'], ['compact', 'compact'], ['coords', 'coords'], ['data', 'data'], ['datetime', 'datetime'], ['declare', 'declare'], ['defer', 'defer'], ['dir', 'dir'], ['disabled', 'disabled'], ['enctype', 'enctype'], ['face', 'face'], ['for', 'for'], ['frame', 'frame'], ['frameborder', 'frameborder'], ['headers', 'headers'], ['height', 'height'], ['href', 'href'], ['hreflang', 'hreflang'], ['hspace', 'hspace'], ['id', 'id'], ['ismap', 'ismap'], ['label', 'label'], ['lang', 'lang'], ['link', 'link'], ['longdesc', 'longdesc'], ['marginheight', 'marginheight'], ['marginwidth', 'marginwidth'], ['maxlength', 'maxlength'], ['media', 'media'], ['method', 'method'], ['multiple', 'multiple'], ['name', 'name'], ['nohref', 'nohref'], ['noresize', 'noresize'], ['noshade', 'noshade'], ['nowrap', 'nowrap'], ['object', 'object'], ['profile', 'profile'], ['prompt', 'prompt'], ['readonly', 'readonly'], ['rel', 'rel'], ['rev', 'rev'], ['rows', 'rows'], ['rowspan', 'rowspan'], ['rules', 'rules'], ['scope', 'scope'], ['scrolling', 'scrolling'], ['selected', 'selected'], ['shape', 'shape'], ['size', 'size'], ['span', 'span'], ['src', 'src'], ['standby', 'standby'], ['start', 'start'], ['style', 'style'], ['summary', 'summary'], ['tabindex', 'tabindex'], ['target', 'target'], ['text', 'text'], ['title', 'title'], ['type', 'type'], ['usemap', 'usemap'], ['valign', 'valign'], ['value', 'value'], ['valuetype', 'valuetype'], ['vlink', 'vlink'], ['vspace', 'vspace'], ['width', 'width'], ['wrap', 'wrap']];

  options.statusAttrs = [['Checked', 'checked'], ['Unchecked', 'unchecked'], ['Disabled', 'disabled'], ['Enabled', 'enabled'], ['Selected', 'selected'], ['Unselected', 'selected']];

  options.speedAttrs = [[label.normal, '0'], ['1ms', '1'], ['10ms', '10'], ['100ms', '100'], ['250ms', '250'], ['500ms', '500'], ['1000ms', '1000'], ['2500ms', '2500'], ['5000ms', '5000'], ['10000ms', '10000']];

  options.delayAttrs = [[label.none, '0'], ['1ms', '1'], ['10ms', '10'], ['100ms', '100'], ['250ms', '250'], ['500ms', '500'], ['1000ms', '1000'], ['2500ms', '2500'], ['5000ms', '5000'], ['10000ms', '10000']];

  options.opacityAttrs = [['0%', '0'], ['25%', '0.25'], ['50%', '0.5'], ['75%', '0.75'], ['100%', '1']];

  options.animateProperties = [['background-color', 'backgroundColor'], ['border-bottom-color', 'borderBottomColor'], ['border-bottom-width', 'borderBottomWidth'], ['border-left-color', 'borderLeftColor'], ['border-left-width', 'borderLeftWidth'], ['border-right-color', 'borderRightColor'], ['border-right-width', 'borderRightWidth'], ['border-spacing', 'borderSpacing'], ['border-top-color', 'borderTopColor'], ['border-top-width', 'borderTopWidth'], ['border-width', 'borderWidth'], ['bottom', 'bottom'], ['color', 'color'], ['font-size', 'fontSize'], ['height', 'height'], ['left', 'left'], ['letter-spacing', 'letterSpacing'], ['line-height', 'lineHeight'], ['margin', 'margin'], ['margin-bottom', 'marginBottom'], ['margin-left', 'marginLeft'], ['margin-right', 'marginRight'], ['margin-top', 'marginTop'], ['max-height', 'maxHeight'], ['max-width', 'maxWidth'], ['min-height', 'minHeight'], ['min-width', 'minWidth'], ['opacity', 'opacity'], ['outline-color', 'outlineColor'], ['outline-width', 'outlineWidth'], ['padding', 'padding'], ['padding-bottom', 'paddingBottom'], ['padding-left', 'paddingLeft'], ['padding-right', 'paddingRight'], ['padding-top', 'paddingTop'], ['right', 'right'], ['scroll-v', 'scrollTop'], ['scroll-h', 'scrollLeft'], ['text-indent', 'textIndent'], ['top', 'top'], ['width', 'width'], ['word-spacing', 'wordSpacing']];

  options.relativeAttrs = [['To', ''], ['+', '+='], ['-', '-=']];

  options.easingAttrs = [[label.linear, 'linear'], ['Swing', 'swing'], ['In Quad', 'easeInQuad'], ['In Out Quad', 'easeInOutQuad'], ['In Cubic', 'easeInCubic'], ['Out Cubic', 'easeOutCubic'], ['In Out Cubic', 'easeInOutCubic'], ['In Quart', 'easeInQuart'], ['Out Quart', 'easeOutQuart'], ['In Out Quart', 'easeInOutQuart'], ['In Quint', 'easeInQuint'], ['Out Quint', 'easeOutQuint'], ['In Out Quint', 'easeInOutQuint'], ['In Sine', 'easeInSine'], ['Out Sine', 'easeOutSine'], ['In Out Sine', 'easeInOutSine'], ['In Expo', 'easeInExpo'], ['Out Expo', 'easeOutExpo'], ['In Out Expo', 'easeInOutExpo'], ['In Circ', 'easeInCirc'], ['Out Circ', 'easeOutCirc'], ['In Out Circ', 'easeInOutCirc'], ['In Elastic', 'easeInElastic'], ['Out Elastic', 'easeOutElastic'], ['In Out Elastic', 'easeInOutElastic'], ['In Back', 'easeInBack'], ['Out Back', 'easeOutBack'], ['In Out Back', 'easeInOutBack'], ['In Bounce', 'easeInBounce'], ['Out Bounce', 'easeOutBounce'], ['In Out Bounce', 'easeInOutBounce']];

  options.basicEffectAttrs = [[label.none, ''], ['Blind Vertical', 'blind-v'], ['Blind Horizontal', 'blind-h'], ['Clip Vertical', 'clip-v'], ['Clip Horizontal', 'clip-h'], ['Drop Left', 'drop-l'], ['Drop Right', 'drop-r'], ['Drop Up', 'drop-u'], ['Drop Down', 'drop-d'], ['Explode', 'explode'], ['Fold', 'fold'], ['Puff', 'puff'], ['Slide Left', 'slide-l'], ['Slide Right', 'slide-r'], ['Slide Up', 'slide-u'], ['Slide Down', 'slide-d'], ['Scale', 'scale'], ['Pulsate', 'pulsate']];

  options.statuses = [['Visible', 'visible'], ['Hidden', 'hidden'], ['Checked', 'checked'], ['Selected', 'selected'], /*['Enabled', 'enabled'], */['Disabled', 'disabled']];

  options.condTypes = [['Shown', 'visible'], ['Hidden', 'hidden'], ['Checked', 'checked'], ['Selected', 'selected'], ['Enabled', 'enabled'], ['Disabled', 'disabled']];

  options.insertHTMLTypes = [[label.insertHTMLOverwrite, 'html'], [label.insertHTMLInsideBottom, 'append'], [label.insertHTMLInsideTop, 'prepend'], [label.insertHTMLAfter, 'after'], [label.insertHTMLBefore, 'before']];

  options.dragAxes = [[label.none, '0'], [label.dragAxesX, '1'], [label.dragAxesY, '2']];

  options.datePickerFormats = [['mm/dd/yy', 'mm/dd/yy'], ['yy/mm/dd', 'yy/mm/dd'], ['yy-mm-dd', 'yy-mm-dd']/*, [label.dayName + ', d M yy', 'D, d M yy'], ['yy年 m月 d日（' + label.dayName + '）', 'yy年 M d日（D）']*/];


};


// CMD Categories

ixedit.cmdCat = { 0:'dom', 1:'effect', 2:'generate', 11:'misc', 21:'advanced' };


// Making preset CMD instances

ixedit.preAssignCmds = function(){
  var lang = ixedit.lang;
  var cmd = ixedit.cmd;
  var cmds = ixedit.cmds;
  var options = ixedit.selectOptions;
  var label = ixedit.label;


  // Add Class
  lang.en.cmdSNAddClass = 'Add Class';
  lang.zh.cmdSNAddClass = '添加Class';
  lang.ja.cmdSNAddClass = 'クラス追加';
  lang.en.commandHelpAddClass = '<h2>About Add Class Command</h2><p>Add Class command will add the specified class name to the selected element.</p>';
  lang.zh.commandHelpAddClass = '<h2>About Add Class Command</h2><p>Add Class command will add the specified class name to the selected element.</p>';
  lang.ja.commandHelpAddClass = '<h2>クラス追加コマンドについて</h2><p>クラス追加コマンドは、セレクトした要素に指定のクラス名を追加します。</p>';


  var newCmd = new cmd();
  newCmd.name = 'addClass';
  newCmd.screenName = label.cmdSNAddClass;
  newCmd.category = ixedit.cmdCat[0];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-addclassvalue ixedit-labelarea-default">' + label.inputLabelClassName + '</td><td class="ixedit-inputarea-addclassvalue">', '', '</td></tr></table>']];
  newCmd.help = label.commandHelpAddClass;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '(' + '\'' + attributeArray[0] + '\'' + ')';
    return commandString;
  };
  cmds.addClass = newCmd;

  // Remove Class
  lang.en.cmdSNRemoveClass = 'Remove Class';
  lang.zh.cmdSNRemoveClass = '移除Class';
  lang.ja.cmdSNRemoveClass = 'クラス削除';
  lang.en.commandHelpRemoveClass = '<h2>About Remove Class Command</h2><p>Remove Class command will remove the specified class name from the selected element.</p>';
  lang.zh.commandHelpRemoveClass = '<h2>About Remove Class Command</h2><p>Remove Class command will remove the specified class name from the selected element.</p>';
  lang.ja.commandHelpRemoveClass = '<h2>クラス削除コマンドについて</h2><p>クラス削除コマンドは、セレクトした要素から指定のクラス名を削除します。</p>';
  var newCmd = new cmd();
  newCmd.name = 'removeClass';
  newCmd.screenName = label.cmdSNRemoveClass;
  newCmd.category = ixedit.cmdCat[0];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-removeclassvalue ixedit-labelarea-default">' + label.inputLabelClassName + '</td><td class="ixedit-inputarea-removeclassvalue">', '', '</td></tr></table>']];
  newCmd.help = label.commandHelpRemoveClass;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '(' + '\'' + attributeArray[0] + '\'' + ')';
    return commandString;
  };
  cmds.removeClass = newCmd;

  // Add/Remove Class
  lang.en.cmdSNAddRemoveClass = 'Add/Remove Class';
  lang.zh.cmdSNAddRemoveClass = '添加/移除Class';
  lang.ja.cmdSNAddRemoveClass = 'クラス追加/削除';
  lang.en.commandHelpAddRemoveClass = '<h2>About Add/Remove Class Command</h2><p>Add/Remove Class command will add the specified class name to the selected element if it is not present, or will remove the specified class name from the target element if it is present.</p>';
  lang.zh.commandHelpAddRemoveClass = '<h2>About Add/Remove Class Command</h2><p>Add/Remove Class command will add the specified class name to the selected element if it is not present, or will remove the specified class name from the target element if it is present.</p>';
  lang.ja.commandHelpAddRemoveClass = '<h2>クラス追加/削除コマンドについて</h2><p>クラス追加/削除コマンドは、セレクトした要素に指定のクラス名がなければ追加し、あれば削除します。</p>';
  var newCmd = new cmd();
  newCmd.name = 'toggleClass';
  newCmd.screenName = label.cmdSNAddRemoveClass;
  newCmd.category = ixedit.cmdCat[0];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-addremoveclassvalue ixedit-labelarea-default">' + label.inputLabelClassName + '</td><td class="ixedit-inputarea-addremoveclassvalue">', '', '</td></tr></table>']];
  newCmd.help = label.commandHelpAddRemoveClass;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '(' + '\'' + attributeArray[0] + '\'' + ')';
    return commandString;
  };
  cmds.toggleClass = newCmd;


  // CSS
  lang.en.cmdSNCss = 'Change Style';
  lang.zh.cmdSNCss = '改变Style';
  lang.ja.cmdSNCss = 'スタイル変更';
  lang.en.commandHelpCss = '<h2>About Change Style Command</h2><p>Change Style command will add or change style on the selected element. Specify CSS property and it\'s value. It\'s just like how you edit CSS.</p>';
  lang.zh.commandHelpCss = '<h2>About Change Style Command</h2><p>Change Style command will add or change style on the selected element. Specify CSS property and it\'s value. It\'s just like how you edit CSS.</p>';
  lang.ja.commandHelpCss = '<h2>スタイル変更コマンドについて</h2><p>スタイル変更コマンドは、セレクトした要素のスタイルを追加または変更します。CSS プロパティとその値を指定します。CSS を編集するのと同様の方法です。</p>';
  var newCmd = new cmd();
  newCmd.name = 'css';
  newCmd.screenName = label.cmdSNCss;
  newCmd.category = ixedit.cmdCat[0];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-cssproperty ixedit-labelarea-default">' + label.inputLabelCss + '</td><td class="ixedit-inputarea-cssproperty ixedit-inputarea-xlarge">', options.cssProperties, '</td>'], ['<td class="ixedit-inputarea-cssvalue">', '', '</td></tr></table>']];
  newCmd.help = label.commandHelpCss;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '(' + '\'' + attributeArray[0] + '\'' + ',' + '\'' + attributeArray[1] + '\'' + ')';
    return commandString;
  };
  cmds.css = newCmd;

  // Value
  lang.en.cmdSNVal = 'Change Value';
  lang.zh.cmdSNVal = '改变值';
  lang.ja.cmdSNVal = '値変更';
  lang.en.commandHelpVal = '<h2>About Change Value Command</h2><p>Change Value command will change value of value attribute on the selected element.</p><h3>Available Elements</h3><ul><li>button</li><li>input</li><li>li (under ol)</li><li>option</li></ul>';
  lang.zh.commandHelpVal = '<h2>About Change Value Command</h2><p>Change Value command will change value of value attribute on the selected element.</p><h3>Available Elements</h3><ul><li>button</li><li>input</li><li>li (under ol)</li><li>option</li></ul>';
  lang.ja.commandHelpVal = '<h2>値変更コマンドについて</h2><p>値変更コマンドは、セレクトした要素の value 属性の値を変更します。</p><h3>有効な要素</h3><ul><li>button</li><li>input</li><li>li (ol内)</li><li>option</li></ul>';
  var newCmd = new cmd();
  newCmd.name = 'val';
  newCmd.screenName = label.cmdSNVal;
  newCmd.category = ixedit.cmdCat[0];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-attributename ixedit-labelarea-default">' + label.inputLabelValue + '</td><td class="ixedit-inputarea-attributevalue">', '', '</td></tr></table>']];
  newCmd.help = label.commandHelpVal;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '(' + '\'' + attributeArray[0] + '\'' + ')';
    return commandString;
  };
  cmds.val = newCmd;


  // Status
  lang.en.cmdSNStatus = 'Change Status';
  lang.zh.cmdSNStatus = '改变状态';
  lang.ja.cmdSNStatus = '状態変更';
  lang.en.commandHelpStatus = '<h2>About Change Status Command</h2><p>Change Status command will change status of selected element.</p><h3>Available Elements</h3><ul><li>Checked and Unchecked for input[type=\"checkbox\"] and input[type=\"radio\"].</li><li>Selected and Unselected for option.</li><li>Disabled and Enabled for button, input, optgroup, option, select, and textarea.</li></ul>';
  lang.zh.commandHelpStatus = '<h2>About Change Status Command</h2><p>Change Status command will change status of selected element.</p><h3>Available Elements</h3><ul><li>Checked and Unchecked for input[type=\"checkbox\"] and input[type=\"radio\"].</li><li>Selected and Unselected for option.</li><li>Disabled and Enabled for button, input, optgroup, option, select, and textarea.</li></ul>';
  lang.ja.commandHelpStatus = '<h2>状態変更コマンドについて</h2><p>状態変更コマンドは、セレクトした要素の状態を変更します。</p><h3>有効な要素</h3><ul><li>Checked と Unchecked は input[type=\"checkbox\"] と input[type=\"radio\"] に使用可。</li><li>Selected と Unselected は option に使用可。</li><li>Disabled と Enabled は button, input, optgroup, option, select, textarea に使用可。</li></ul>';
  var newCmd = new cmd();
  newCmd.name = 'status';
  newCmd.screenName = label.cmdSNStatus;
  newCmd.category = ixedit.cmdCat[0];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-attributename ixedit-labelarea-default">' + label.inputLabelStatus + '</td><td class="ixedit-inputarea-attributename ixedit-inputarea-xlarge">', options.statusAttrs, '</td><td>&nbsp;</td></tr></table>']];
  newCmd.help = label.commandHelpStatus;
  newCmd.func = function(attributeArray, attributeSubArray){
    switch(attributeArray[0]){
      case 'checked':
        var commandString = 'attr(\'checked\', \'true\')';
        break;
      case 'unchecked':
        var commandString = 'removeAttr(\'checked\')';
        break;
      case 'selected':
        var commandString = 'attr(\'selected\', \'true\')';
        break;
      case 'unselected':
        var commandString = 'removeAttr(\'selected\')';
        break;
      case 'disabled':
        var commandString = 'attr(\'disabled\', \'true\')';
        break;
      case 'enabled':
        var commandString = 'removeAttr(\'disabled\')';
        break;
      default:
        var commandString = 'attr(\'checked\', \'true\')';
    };
    

    return commandString;
  };
  cmds.status = newCmd;


  // Remove Attribute
  lang.en.cmdSNRemoveAttr = 'Remove Attribute';
  lang.zh.cmdSNRemoveAttr = '移除属性';
  lang.ja.cmdSNRemoveAttr = '属性削除';
  lang.en.commandHelpRemoveAttr = '<h2>About Remove Attribute Command</h2><p>Remove Attribute command will remove specified attribute from the selected element.</p>';
  lang.zh.commandHelpRemoveAttr = '<h2>About Remove Attribute Command</h2><p>Remove Attribute command will remove specified attribute from the selected element.</p>';
  lang.ja.commandHelpRemoveAttr = '<h2>属性削除コマンドについて</h2><p>属性削除コマンドは、セレクトした要素から指定の属性を削除します。</p>';
  var newCmd = new cmd();
  newCmd.name = 'removeAttr';
  newCmd.screenName = label.cmdSNRemoveAttr;
  newCmd.category = ixedit.cmdCat[0];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-removeattributename ixedit-labelarea-default">' + label.inputLabelAttribute + '</td><td class="ixedit-inputarea-removeattributename ixedit-inputarea-xlarge">', options.elementAttrs, '</td><td>&nbsp;</td></tr></table>']];
  newCmd.help = label.commandHelpRemoveAttr;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '(' + '\'' + attributeArray[0] + '\'' + ')';
    return commandString;
  };
  cmds.removeAttr = newCmd;


  // Insert HTML
  lang.en.cmdSNInsertHTML = 'Insert HTML';
  lang.zh.cmdSNInsertHTML = '插入HTML';
  lang.ja.cmdSNInsertHTML = 'HTML 挿入';
  lang.en.commandHelpInsertHtml = '<h2>About Insert HTML Command</h2><p>Insert HTML command will insert specified HTML string (e.g. \"&lt;p&gt;Hello&lt;/p&gt;\") by several ways such as overwriting inside of the selected element, inserting to the inside-bottom of the selected element, inserting to the inside-top of the selected element, inserting after the selected element, or inserting before selected element.</p>';
  lang.zh.commandHelpInsertHtml = '<h2>About Insert HTML Command</h2><p>Insert HTML command will insert specified HTML string (e.g. \"&lt;p&gt;Hello&lt;/p&gt;\") by several ways such as overwriting inside of the selected element, inserting to the inside-bottom of the selected element, inserting to the inside-top of the selected element, inserting after the selected element, or inserting before selected element.</p>';
  lang.ja.commandHelpInsertHtml = '<h2>HTML 挿入コマンドについて</h2><p>HTML 挿入コマンドは、指定の HTML 文字列（例：&lt;p&gt;こんにちは&lt;/p&gt;）を次の方法で挿入します。セレクトした要素内を上書き、セレクトした要素内の末尾に挿入、セレクトした要素内の先頭に挿入、セレクトした要素の後に挿入、セレクトした要素の前に挿入。</p>';
  var newCmd = new cmd;
  newCmd.name = 'insertHTML';
  newCmd.screenName = label.cmdSNInsertHTML;
  newCmd.category = ixedit.cmdCat[0];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-inserthtmlvalue ixedit-labelarea-default">' + label.inputLabelInsertHTMLValue + '</td><td class="ixedit-inputarea-inserthtmlvalue">', '', '</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-inserthtmltype ixedit-labelarea-default">' + label.inputLabelInsertHTMLPoint + '</td><td class="ixedit-inputarea-inserthtmltype ixedit-inputarea-xxlarge">', options.insertHTMLTypes, '</td><td>&nbsp;</td></tr></table>']];
  newCmd.help = label.commandHelpInsertHtml;
  newCmd.dontNeedTarget = false;
  newCmd.func = function(attributeArray, attributeSubArray){
    var htmlValue = attributeArray[0].replace(/'/g,''); // Delete single quote
    switch(attributeArray[1]){
      case 'html':
        var commandString = 'html(\'' + htmlValue + '\')';
        break;
      case 'append':
        var commandString = 'append(\'' + htmlValue + '\')';
        break;
      case 'prepend':
        var commandString = 'prepend(\'' + htmlValue + '\')';
        break;
      case 'after':
        var commandString = 'after(\'' + htmlValue + '\')';
        break;
      case 'before':
        var commandString = 'before(\'' + htmlValue + '\')';
        break;
    };
    return commandString; 
  };
  cmds.insertHTML = newCmd;

  // Insert Remote HTML
  lang.en.cmdSNLoad = 'Insert Remote HTML';
  lang.zh.cmdSNLoad = '插入远程HTML';
  lang.ja.cmdSNLoad = 'リモート HTML 挿入';
  lang.en.commandHelpLoad = '<h2>About Insert Remote HTML Command</h2><p>Insert Remote HTML command will insert HTML from a remote file to the selected element. This will overwrite the existing content of the selected element. Remote file you request and this page should be in the same domain. HTML from a different domain cannot be loaded unless this page is on your local computer.</p>';
  lang.zh.commandHelpLoad = '<h2>About Insert Remote HTML Command</h2><p>Insert Remote HTML command will insert HTML from a remote file to the selected element. This will overwrite the existing content of the selected element. Remote file you request and this page should be in the same domain. HTML from a different domain cannot be loaded unless this page is on your local computer.</p>';
  lang.ja.commandHelpLoad = '<h2>リモート HTML 挿入コマンドについて</h2><p>リモート HTML 挿入コマンドは、セレクトした要素に外部ファイルから HTML を挿入します。セレクトした要素内の既存のコンテンツは上書きされます。リクエストするリモートファイルは、このページと同じドメイン上にある必要があります。異なるドメインからは HTML を読み込めませんが、このページがローカルコンピュータにある場合は可能です。</p>';
  var newCmd = new cmd;
  newCmd.name = 'load';
  newCmd.screenName = label.cmdSNLoad;
  newCmd.category = ixedit.cmdCat[0];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-loadurl ixedit-labelarea-default">' + label.inputLabelLoadURL + '</td><td class="ixedit-inputarea-loadurl">', '', '</td></tr><tr><td>&nbsp;</td><td>' + label.inputLabelLoadURLAnnotation + '</td></tr></table>']];
  newCmd.help = label.commandHelpLoad;
  newCmd.dontNeedTarget = false;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '(\'' + attributeArray[0] + '\')';
    return commandString;
  };
  cmds.load = newCmd;



  // Empty
  lang.en.cmdSNEmpty = 'Empty Element';
  lang.zh.cmdSNEmpty = '清空元素';
  lang.ja.cmdSNEmpty = '要素内を空に';
  lang.en.commandHelpEmpty = '<h2>About Empty Element Command</h2><p>Empty Element command will remove all child nodes from the selected element.</p>';
  lang.zh.commandHelpEmpty = '<h2>About Empty Element Command</h2><p>Empty Element command will remove all child nodes from the selected element.</p>';
  lang.ja.commandHelpEmpty = '<h2>要素内を空にコマンドについて</h2><p>要素内を空にコマンドは、セレクトした要素のすべての子ノードを削除します。</p>';
  var newCmd = new cmd;
  newCmd.name = 'empty';
  newCmd.screenName = label.cmdSNEmpty;
  newCmd.category = ixedit.cmdCat[0];
  newCmd.attrs = [];
  newCmd.help = label.commandHelpEmpty;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '()';
    return commandString;
  };
  cmds.empty = newCmd;




  // Remove
  lang.en.cmdSNRemove = 'Remove Element';
  lang.zh.cmdSNRemove = '移除元素';
  lang.ja.cmdSNRemove = 'エレメント削除';
  lang.en.commandHelpRemove = '<h2>About Remove Element Command</h2><p>Remove Element command will remove the selected element from the DOM.</p>';
  lang.zh.commandHelpRemove = '<h2>About Remove Element Command</h2><p>Remove Element command will remove the selected element from the DOM.</p>';
  lang.ja.commandHelpRemove = '<h2>エレメント削除コマンドについて</h2><p>エレメント削除コマンドは、セレクトした要素を DOM から削除します。</p>';
  var newCmd = new cmd;
  newCmd.name = 'remove';
  newCmd.screenName = label.cmdSNRemove;
  newCmd.category = ixedit.cmdCat[0];
  newCmd.attrs = [];
  newCmd.help = label.commandHelpRemove;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '()';
    return commandString;
  };
  cmds.remove = newCmd;


  // Show
  lang.en.cmdSNShow = 'Show';
  lang.zh.cmdSNShow = '显示';
  lang.ja.cmdSNShow = '表示';
  lang.en.commandHelpShow = '<h2>About Show Command</h2><p>Show command will display the selected element if it is hidden. If you apply duration on an inline-element, it will be changed as a block-element.</p>';
  lang.zh.commandHelpShow = '<h2>About Show Command</h2><p>Show command will display the selected element if it is hidden. If you apply duration on an inline-element, it will be changed as a block-element.</p>';
  lang.ja.commandHelpShow = '<h2>表示コマンドについて</h2><p>表示コマンドは、セレクトした要素が非表示状態であれば表示します。インライン要素に対して継続時間を指定した場合、その要素はブロック要素に変更されます。</p>';
  var newCmd = new cmd;
  newCmd.name = 'show';
  newCmd.screenName = label.cmdSNShow;
  newCmd.category = ixedit.cmdCat[1];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-showspeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-showspeed ixedit-inputarea-medium">', options.speedAttrs, '</td>'], ['<td class="ixedit-labelarea-showeffect ixedit-labelarea-small">' + label.inputLabelEffect + '</td><td class="ixedit-inputarea-showeffect ixedit-inputarea-large">', options.basicEffectAttrs, '</td><td>&nbsp;</td></tr></table>']];
  newCmd.help = label.commandHelpShow;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.effectParams(attributeArray[1], attributeArray[0]);
    return commandString;
  };
  cmds.show = newCmd;

  // Hide
  lang.en.cmdSNHide = 'Hide';
  lang.zh.cmdSNHide = '隐藏';
  lang.ja.cmdSNHide = '非表示';
  lang.en.commandHelpHide = '<h2>About Hide Command</h2><p>Hide command will hide the selected element if it is shown. If you apply duration on an inline-element, it will be changed as a block-element.</p>';
  lang.zh.commandHelpHide = '<h2>About Hide Command</h2><p>Hide command will hide the selected element if it is shown. If you apply duration on an inline-element, it will be changed as a block-element.</p>';
  lang.ja.commandHelpHide = '<h2>表示コマンドについて</h2><p>非表示コマンドは、セレクトした要素が表示状態であれば非表示にします。インライン要素に対して継続時間を指定さいた場合、その要素はブロック要素に変更されます。</p>';
  var newCmd = new cmd;
  newCmd.name = 'hide';
  newCmd.screenName = label.cmdSNHide;
  newCmd.category = ixedit.cmdCat[1];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-hidespeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-hidespeed ixedit-inputarea-medium">', options.speedAttrs, '</td>'], ['<td class="ixedit-labelarea-hideeffect ixedit-labelarea-small">' + label.inputLabelEffect + '</td><td class="ixedit-inputarea-hideeffect ixedit-inputarea-large">', options.basicEffectAttrs, '</td><td>&nbsp;</td></tr></table>']];
  newCmd.help = label.commandHelpHide;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.effectParams(attributeArray[1], attributeArray[0]);
    return commandString; 
  };
  cmds.hide = newCmd;

  // Show/Hide
  lang.en.cmdSNToggle = 'Show/Hide';
  lang.zh.cmdSNToggle = '显示/隐藏';
  lang.ja.cmdSNToggle = '表示/非表示';
  lang.en.commandHelpToggle = '<h2>About Show/Hide Command</h2><p>Show/Hide command will show the selected element if it is hidden and will hide the selected element if it is shown. If you apply duration on an inline-element, it will be changed as a block-element.</p>';
  lang.zh.commandHelpToggle = '<h2>About Show/Hide Command</h2><p>Show/Hide command will show the selected element if it is hidden and will hide the selected element if it is shown. If you apply duration on an inline-element, it will be changed as a block-element.</p>';
  lang.ja.commandHelpToggle = '<h2>表示/非表示コマンドについて</h2><p>表示/非表示コマンドは、セレクトした要素が非表示状態であれば表示し、表示状態であれば非表示にします。インライン要素に対して継続時間を指定さいた場合、その要素はブロック要素に変更されます。</p>';
  var newCmd = new cmd;
  newCmd.name = 'toggle';
  newCmd.screenName = label.cmdSNToggle;
  newCmd.category = ixedit.cmdCat[1];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-showhidespeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-showhidespeed ixedit-inputarea-medium">', options.speedAttrs, '</td>'], ['<td class="ixedit-labelarea-showhideeffect ixedit-labelarea-small">' + label.inputLabelEffect + '</td><td class="ixedit-inputarea-showhideeffect ixedit-inputarea-large">', options.basicEffectAttrs, '</td><td>&nbsp;</td></tr></table>']];
  newCmd.help = label.commandHelpToggle;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.effectParams(attributeArray[1], attributeArray[0]);
    return commandString;
  };
  cmds.toggle = newCmd;

  // Slide Down
  lang.en.cmdSNSlideDown = 'Slide Down';
  lang.zh.cmdSNSlideDown = '滑下';
  lang.ja.cmdSNSlideDown = 'スライドダウン';
  lang.en.commandHelpSlideDown = '<h2>About Slide Down Command</h2><p>Slide Down command will reveal the selected element with sliding-down effect.</p>';
  lang.zh.commandHelpSlideDown = '<h2>About Slide Down Command</h2><p>Slide Down command will reveal the selected element with sliding-down effect.</p>';
  lang.ja.commandHelpSlideDown = '<h2>スライドダウンコマンドについて</h2><p>スライドダウンコマンドは、セレクトした要素をスライドダウン効果とともに表示します。</p>';
  var newCmd = new cmd;
  newCmd.name = 'slideDown';
  newCmd.screenName = label.cmdSNSlideDown;
  newCmd.category = ixedit.cmdCat[1];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-slidedownspeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-slidedownspeed ixedit-inputarea-medium">', options.speedAttrs, '</td><td>&nbsp;</td></tr></table>']];
  newCmd.help = label.commandHelpSlideDown;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '(' + attributeArray[0] + ')';
    return commandString;
  };
  cmds.slideDown = newCmd;

  // Slide Up
  lang.en.cmdSNSlideUp = 'Slide Up';
  lang.zh.cmdSNSlideUp = '滑上';
  lang.ja.cmdSNSlideUp = 'スライドアップ';
  lang.en.commandHelpSlideUp = '<h2>About Slide Up Command</h2><p>Slide Up command will hide the selected element with sliding-up effect.</p>';
  lang.zh.commandHelpSlideUp = '<h2>About Slide Up Command</h2><p>Slide Up command will hide the selected element with sliding-up effect.</p>';
  lang.ja.commandHelpSlideUp = '<h2>スライドアップコマンドについて</h2><p>スライドアップコマンドは、セレクトした要素をスライドアップ効果とともに非表示にします。</p>';
  var newCmd = new cmd;
  newCmd.name = 'slideUp';
  newCmd.screenName = label.cmdSNSlideUp;
  newCmd.category = ixedit.cmdCat[1];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-slideupspeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-slideupspeed ixedit-inputarea-medium">', options.speedAttrs, '</td><td>&nbsp;</td></tr></table>']];
  newCmd.help = label.commandHelpSlideUp;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '(' + attributeArray[0] + ')';
    return commandString;
  };
  cmds.slideUp = newCmd;

  // Slide Down/Up
  lang.en.cmdSNSlideToggle = 'Slide Down/Up';
  lang.zh.cmdSNSlideToggle = '滑下/滑上';
  lang.ja.cmdSNSlideToggle = 'スライドダウン/アップ';
  lang.en.commandHelpSlideToggle = '<h2>About Slide Down/Up Command</h2><p>Slide Down/Up command will reveal the selected element with sliding-down effect if it is hidden and will hide the selected element with sliding-up effect if it is shown.</p>';
  lang.zh.commandHelpSlideToggle = '<h2>About Slide Down/Up Command</h2><p>Slide Down/Up command will reveal the selected element with sliding-down effect if it is hidden and will hide the selected element with sliding-up effect if it is shown.</p>';
  lang.ja.commandHelpSlideToggle = '<h2>スライドダウン/アップコマンドについて</h2><p>スライドダウン/アップコマンドは、セレクトした要素が非表示状態であればスライドダウン効果とともに表示し、表示状態であればスライドアップ効果とともに非表示にします。</p>';
  var newCmd = new cmd;
  newCmd.name = 'slideToggle';
  newCmd.screenName = label.cmdSNSlideToggle;
  newCmd.category = ixedit.cmdCat[1];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-slidedownupspeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-slidedownupspeed ixedit-inputarea-medium">', options.speedAttrs, '</td><td>&nbsp;</td></tr></table>']];
  newCmd.help = label.commandHelpSlideToggle;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '(' + attributeArray[0] + ')';
    return commandString;
  };
  cmds.slideToggle = newCmd;

  // Fade In
  lang.en.cmdSNFadeIn = 'Fade In';
  lang.zh.cmdSNFadeIn = '渐显';
  lang.ja.cmdSNFadeIn = 'フェードイン';
  lang.en.commandHelpFadeIn = '<h2>About Fade In Command</h2><p>Fade In command will show the selected element with fading-in effect.</p>';
  lang.zh.commandHelpFadeIn = '<h2>About Fade In Command</h2><p>Fade In command will show the selected element with fading-in effect.</p>';
  lang.ja.commandHelpFadeIn = '<h2>フェードインコマンドについて</h2><p>フェードインコマンドは、セレクトした要素をフェードイン効果とともに表示します。</p>';
  var newCmd = new cmd;
  newCmd.name = 'fadeIn';
  newCmd.screenName = label.cmdSNFadeIn;
  newCmd.category = ixedit.cmdCat[1];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-fadeinspeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-fadeinspeed ixedit-inputarea-medium">', options.speedAttrs, '</td><td>&nbsp;</td></tr></table>']];
  newCmd.help = label.commandHelpFadeIn;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '(' + attributeArray[0] + ')';
    return commandString;
  };
  cmds.fadeIn = newCmd;

  // Fade Out
  lang.en.cmdSNFadeOut = 'Fade Out';
  lang.zh.cmdSNFadeOut = '渐隐';
  lang.ja.cmdSNFadeOut = 'フェードアウト';
  lang.en.commandHelpFadeOut = '<h2>About Fade Out Command</h2><p>Fade Out command will hide the selected element with fading-out effect.</p>';
  lang.zh.commandHelpFadeOut = '<h2>About Fade Out Command</h2><p>Fade Out command will hide the selected element with fading-out effect.</p>';
  lang.ja.commandHelpFadeOut = '<h2>フェードアウトコマンドについて</h2><p>フェードアウトコマンドは、セレクトした要素をフェードアウト効果とともに非表示にします。</p>';
  var newCmd = new cmd;
  newCmd.name = 'fadeOut';
  newCmd.screenName = label.cmdSNFadeOut;
  newCmd.category = ixedit.cmdCat[1];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-fadeoutspeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-fadeoutspeed ixedit-inputarea-medium">', options.speedAttrs, '</td><td>&nbsp;</td></tr></table>']];
  newCmd.help = label.commandHelpFadeOut;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '(' + attributeArray[0] + ')';
    return commandString; // コマンド文字列をリターン
  };
  cmds.fadeOut = newCmd;

  // Fade To
  lang.en.cmdSNFadeTo = 'Fade To';
  lang.zh.cmdSNFadeTo = '渐隐至指定值';
  lang.ja.cmdSNFadeTo = '指定値へフェード';
  lang.en.commandHelpFadeTo = '<h2>About Fade To Command</h2><p>Fade To command will fade the opacity of the selected element to a specified opacity.</p>';
  lang.zh.commandHelpFadeTo = '<h2>About Fade To Command</h2><p>Fade To command will fade the opacity of the selected element to a specified opacity.</p>';
  lang.ja.commandHelpFadeTo = '<h2>指定値へフェードコマンドについて</h2><p>指定値へフェードコマンドは、セレクトした要素を指定の不透明度までフェードします。</p>';
  var newCmd = new cmd;
  newCmd.name = 'fadeTo';
  newCmd.screenName = label.cmdSNFadeTo;
  newCmd.category = ixedit.cmdCat[1];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-fadetoopacity ixedit-labelarea-default">' + label.inputLabelOpacity + '</td><td class="ixedit-inputarea-fadetoopacity ixedit-inputarea-small">', options.opacityAttrs, '</td>'], ['<td class="ixedit-labelarea-fadetospeed ixedit-labelarea-medium">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-fadetospeed ixedit-inputarea-medium">', options.speedAttrs, '</td><td>&nbsp;</td></tr></table>']];
  newCmd.help = label.commandHelpFadeTo;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '(' + attributeArray[1] + ',' + '\'' + attributeArray[0] + '\'' + ')';
    return commandString;
  };
  cmds.fadeTo = newCmd;



  // Animate 
  lang.en.cmdSNAnimate = 'Animate';
  lang.zh.cmdSNAnimate = '动画';
  lang.ja.cmdSNAnimate = 'アニメート';
  lang.en.commandHelpAnimate = '<h2>About Animate Command</h2><p>Animate command will animate the selected element. Specify the style propertie(s) that will be animated and to what end. Not only sizes (e.g. \"width\", \"margin\", or \"line-height\") but also colors, opacities, and scroll positions can be animated. You can animate multiple properties of one element at the same time.</p>';
  lang.zh.commandHelpAnimate = '<h2>About Animate Command</h2><p>Animate command will animate the selected element. Specify the style propertie(s) that will be animated and to what end. Not only sizes (e.g. \"width\", \"margin\", or \"line-height\") but also colors, opacities, and scroll positions can be animated. You can animate multiple properties of one element at the same time.</p>';
  lang.ja.commandHelpAnimate = '<h2>アニメートコマンドについて</h2><p>アニメートコマンドは、セレクトした要素をアニメートします。アニメートさせるプロパティと、終了値を指定します。サイズだけでなく、色、不透明度、スクロール地点などもアニメートできます。ひとつの要素について複数のプロパティを同時にアニメートさせることができます。</p>';
  var newCmd = new cmd;
  newCmd.name = 'animate';
  newCmd.screenName = label.cmdSNAnimate;
  newCmd.category = ixedit.cmdCat[1];
  newCmd.subParamAttrsHTMLs = new Array();
  newCmd.subParamAttrsHTMLs[0] = '<td class="ixedit-labelarea-animatecssproperty ixedit-labelarea-default">' + label.inputLabelCss + '</td><td class="ixedit-inputarea-animatecssproperty ixedit-inputarea-xlarge"><select class="ixedit-inputitem-sub ixedit-inputitem-sub-selectCssProperty" onchange="if(jQuery(this).val()==\'backgroundColor\' || jQuery(this).val()==\'borderBottomColor\' || jQuery(this).val()==\'borderLeftColor\' || jQuery(this).val()==\'borderRightColor\' || jQuery(this).val()==\'borderTopColor\' || jQuery(this).val()==\'color\' || jQuery(this).val()==\'outlineColor\'){jQuery(\'.ixedit-inputitem-sub-selectRelative\', jQuery(this).closest(\'tr\')).val(\'\')}">' + ixedit.arrayToOptions(ixedit.selectOptions.animateProperties) + '</select></td>';
  newCmd.subParamAttrsHTMLs[1] = '<td class="ixedit-inputarea-animaterelative ixedit-inputarea-xsmall"><select class="ixedit-inputitem-sub ixedit-inputitem-sub-selectRelative" onchange="if(jQuery(\'.ixedit-inputitem-sub-selectCssProperty\', jQuery(this).closest(\'tr\')).val()==\'backgroundColor\' || jQuery(\'.ixedit-inputitem-sub-selectCssProperty\', jQuery(this).closest(\'tr\')).val()==\'borderBottomColor\' || jQuery(\'.ixedit-inputitem-sub-selectCssProperty\', jQuery(this).closest(\'tr\')).val()==\'borderLeftColor\' || jQuery(\'.ixedit-inputitem-sub-selectCssProperty\', jQuery(this).closest(\'tr\')).val()==\'borderRightColor\' || jQuery(\'.ixedit-inputitem-sub-selectCssProperty\', jQuery(this).closest(\'tr\')).val()==\'borderTopColor\' || jQuery(\'.ixedit-inputitem-sub-selectCssProperty\', jQuery(this).closest(\'tr\')).val()==\'color\' || jQuery(\'.ixedit-inputitem-sub-selectCssProperty:first\', jQuery(this).closest(\'tr\')).val()==\'outlineColor\'){jQuery(this).val(\'\')}">' + ixedit.arrayToOptions(ixedit.selectOptions.relativeAttrs) + '</select></td>';
  newCmd.subParamAttrsHTMLs[2] = '<td class="ixedit-input-animatevalue"><input class="ixedit-inputitem-sub ixedit-inputitem-sub-textbox" type="text" /></td>';
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-animatespeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-animatespeed ixedit-inputarea-medium">', options.speedAttrs, '</td>'], ['<td class="ixedit-labelarea-animateeasing ixedit-labelarea-small">' + label.inputLabelEasing + '</td><td class="ixedit-inputarea-animateeasing ixedit-inputarea-large">', options.easingAttrs, '</td><td>&nbsp;</td></tr></table>'], ['', ixedit.makeSubParams, '']];
  newCmd.help = label.commandHelpAnimate;
  newCmd.func = function(attributeArray, attributeSubArray){
    var theSpeed = attributeArray[0];
    var theEasing = attributeArray[1];

    var subParamsString = new Array();
    subParamsString = '{';
    var theLen = attributeSubArray.length;
    var subParamsElements = new Array();
    for(var i=0; i<theLen; i++){
      subParamsElements[subParamsElements.length] = '\'' + attributeSubArray[i][0] + '\'' + ':' + '\'' + attributeSubArray[i][1] + attributeSubArray[i][2] + '\'';
    };
    subParamsString += subParamsElements.join(',');
    subParamsString += '}';
    var commandString = this.name + '(' + subParamsString + ',' + theSpeed + ',' + '\'' + theEasing + '\'' + ')';

    return commandString;
  };
  cmds.animate = newCmd;




  // Draggable
  lang.en.cmdSNDraggable = 'Draggable';
  lang.zh.cmdSNDraggable = '允许拖动';
  lang.ja.cmdSNDraggable = 'ドラッグ可能に';
  lang.en.commandHelpDraggable = '<h2>About Draggable Command</h2><p>Draggable command will make the selected element draggable with the mouse.</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-draggable\" will be added to the draggabled element.</li><li>\"ui-draggable-dragging\" will be added during drag.</li></ul>';
  lang.zh.commandHelpDraggable = '<h2>About Draggable Command</h2><p>Draggable command will make the selected element draggable with the mouse.</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-draggable\" will be added to the draggabled element.</li><li>\"ui-draggable-dragging\" will be added during drag.</li></ul>';
  lang.ja.commandHelpDraggable = '<h2>ドラッグ可能にコマンドについて</h2><p>ドラッグ可能にコマンドは、セレクトした要素をマウスでドラッグ可能にします。</p><h3>動的なクラス</h3><p>これらの動的に追加されるクラス名を使ってスタイルを変更できます。</p><ul><li>\"ui-draggable\" ドラッグ可能にした要素に追加されます。</li><li>\"ui-draggable-dragging\" ドラッグ中に追加されます。</li></ul>';
  var newCmd = new cmd;
  newCmd.name = 'draggable';
  newCmd.screenName = label.cmdSNDraggable;
  newCmd.category = ixedit.cmdCat[2];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-dragAxes ixedit-labelarea-default">' + label.inputLabelDragAxes + '</td><td class="ixedit-inputarea-inserthtmltype ixedit-inputarea-medium">', options.dragAxes, '</td><td>&nbsp;</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-draggablemovecursor ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-draggablemovecursor ixedit-inputarea-checkbox">', false, '</td><td><label onclick="jQuery(\'input\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelDraggableMoveCursor + '</label></td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-draggableopacity ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-draggableopacity ixedit-inputarea-checkbox">', false, '</td><td><label onclick="jQuery(\'input\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelDraggableOpacify + '</label></td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-draggablerevert ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-draggablerevert ixedit-inputarea-checkbox">', false, '</td><td><label onclick="jQuery(\'input\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelDraggableRevert + '</label></td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-draggablecontainment ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-draggablecontainment ixedit-inputarea-checkbox">', false, '</td><td><label onclick="jQuery(\'input\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelDraggableContainment + '</label></td></tr></table>']];
  newCmd.help = label.commandHelpDraggable;
  newCmd.dontNeedDelay= true;
  newCmd.func = function(attributeArray, attributeSubArray){
    var optionsArray = new Array();
    var additionalString = '';
    var axisString = '';
    switch(attributeArray[0]){
      case '0':
        axisString = '';
        break;
      case '1':
        axisString = 'axis:\'x\'';
        break;
      case '2':
        axisString = 'axis:\'y\'';
        break;
    };
    if(axisString!=''){
      optionsArray[optionsArray.length] = axisString;
    };
    if(attributeArray[1]==true){
      additionalString += '.css(\'cursor\', \'move\')';
    };
    if(attributeArray[2]==true){
      optionsArray[optionsArray.length] = 'opacity:0.5';
    };
    if(attributeArray[3]==true){
      optionsArray[optionsArray.length] = 'revert:\'invalid\'';
      optionsArray[optionsArray.length] = 'revertDuration:250';
    };
    if(attributeArray[4]==true){
      optionsArray[optionsArray.length] = 'containment:\'parent\'';
    };
    var optionsString = optionsArray.join(',');
    var commandString = this.name + '({' + optionsString + '})' + additionalString;
    return commandString;
  };
  cmds.draggable = newCmd;

  // Droppable
  lang.en.cmdSNDroppable = 'Droppable';
  lang.zh.cmdSNDroppable = '允许接收拖动';
  lang.ja.cmdSNDroppable = 'ドロップ可能に';
  lang.en.commandHelpDroppable = '<h2>About Droppable Command</h2><p>Droppable command will make the selected element droppable (meaning it accepts being dropped on by draggables).</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-droppable\" will be added to the droppabled element.</li><li>\"drophover\" will be added during being hovered by draggables.</li></ul><h3>For Advanced Use</h3><p>You can specify the reaction kicked by \"Drop\" event by choosing from the event menu. To specify the dropped element as the reaction selector, type \"drop\" in the Reaction Selector textbox.</p>';
  lang.zh.commandHelpDroppable = '<h2>About Droppable Command</h2><p>Droppable command will make the selected element droppable (meaning it accepts being dropped on by draggables).</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-droppable\" will be added to the droppabled element.</li><li>\"drophover\" will be added during being hovered by draggables.</li></ul><h3>For Advanced Use</h3><p>You can specify the reaction kicked by \"Drop\" event by choosing from the event menu. To specify the dropped element as the reaction selector, type \"drop\" in the Reaction Selector textbox.</p>';
  lang.ja.commandHelpDraggable = '<h2>ドロップ可能にコマンドについて</h2><p>ドロップ可能にコマンドは、セレクトされた要素をドロップ可能にします（ドラッグ可能にした要素を受け付けます）。</p><h3>動的なクラス</h3><p>これらの動的に追加されるクラス名を使ってスタイルを変更できます。</p><ul><li>\"ui-droppable\" ドロップ可能にした要素に追加されます。</li><li>\"drophover\" ドラッグ可能にした要素がホーバーしている間に追加されます。</li></ul><h3>アドバンスドな使用</h3><p>イベントメニューから「ドロップ」を選んで、「ドロップ」イベントによって実行されるリアクションを指定することができます。ドロップされた要素をリアクションのセレクタに指定したい場合は、リアクションセレクタのテキストボックスに「drop」と入力します。</p>';
  var newCmd = new cmd;
  newCmd.name = 'droppable';
  newCmd.screenName = label.cmdSNDroppable;
  newCmd.category = ixedit.cmdCat[2];
  newCmd.attrs = [];
  newCmd.help = label.commandHelpDraggable;
  newCmd.dontNeedDelay= true;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '({hoverClass: \'drophover\',\'tolerance\':\'pointer\'})';
    return commandString;
  };
  cmds.droppable = newCmd;

  // Resizable
  lang.en.cmdSNResizable = 'Resizable';
  lang.zh.cmdSNResizable = '允许调整尺寸';
  lang.ja.cmdSNResizable = 'リサイズ可能に';
  lang.en.commandHelpResizable = '<h2>About Resizable Command</h2><p>Resizable command will make selected element resizable (meaning it has draggable resize handles). </p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-resizable\" will be added to the resizabled element.</li><li>\"ui-resizable-handle\" will be added to the resize handles which are generated dynamically around the selected element to be as the grabbers.</li><li>\"ui-resizable-n\" will be added to the North grabber.</li><li>\"ui-resizable-s\" will be added to the South grabber.</li><li>\"ui-resizable-e\" will be added to the East grabber.</li><li>\"ui-resizable-w\" will be added to the West grabber.</li><li>\"ui-resizable-se\" will be added to the South-East grabber.</li><li>\"ui-resizable-sw\" will be added to the South-West grabber.</li><li>\"ui-resizable-nw\" will be added to the North-West grabber.</li><li>\"ui-resizable-ne\" will be added to the North-East grabber.</li></ul>';
  lang.zh.commandHelpResizable = '<h2>About Resizable Command</h2><p>Resizable command will make selected element resizable (meaning it has draggable resize handles). </p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-resizable\" will be added to the resizabled element.</li><li>\"ui-resizable-handle\" will be added to the resize handles which are generated dynamically around the selected element to be as the grabbers.</li><li>\"ui-resizable-n\" will be added to the North grabber.</li><li>\"ui-resizable-s\" will be added to the South grabber.</li><li>\"ui-resizable-e\" will be added to the East grabber.</li><li>\"ui-resizable-w\" will be added to the West grabber.</li><li>\"ui-resizable-se\" will be added to the South-East grabber.</li><li>\"ui-resizable-sw\" will be added to the South-West grabber.</li><li>\"ui-resizable-nw\" will be added to the North-West grabber.</li><li>\"ui-resizable-ne\" will be added to the North-East grabber.</li></ul>';
  lang.ja.commandHelpResizable = '<h2>リサイズ可能にコマンドについて</h2><p>リサイズ可能にコマンドは、セレクトされた要素をリサイズ可能にします（ドラッグ可能なリサイズハンドルを追加します）。</p><h3>動的なクラス</h3><p>これらの動的に追加されるクラス名を使ってスタイルを変更できます。</p><ul><li>\"ui-resizable\" リサイズ可能にした要素に追加されます。</li><li>\"ui-resizable-handle\" セレクトした要素の周りに「つまみ」として動的に生成される要素に追加されます。</li><li>\"ui-resizable-n\" 上のつまみに追加されます。</li><li>\"ui-resizable-s\" 下のつまみに追加されます。</li><li>\"ui-resizable-e\" 右のつまみに追加されます。</li><li>\"ui-resizable-w\" 左のつまみに追加されます。</li><li>\"ui-resizable-se\" 右下のつまみに追加されます。</li><li>\"ui-resizable-sw\" 左下のつまみに追加されます。</li><li>\"ui-resizable-nw\" 左上のつまみに追加されます。</li><li>\"ui-resizable-ne\" 右下のつまみに追加されます。</li></ul>';
  var newCmd = new cmd;
  newCmd.name = 'resizable';
  newCmd.screenName = label.cmdSNResizable;
  newCmd.category = ixedit.cmdCat[2];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-resizablekeepaspect ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-resizablekeepaspect ixedit-inputarea-checkbox">', false, '</td><td><label onclick="jQuery(\'input\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelResizableKeepAspect + '</label></td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-resizablehandle ixedit-labelarea-default">' + label.inputLabelResizableHandle + '</td><td class="ixedit-inputarea-resizablehandle ixedit-inputarea-checkbox">', false, '</td><td class="ixedit-labelarea-small ixedit-labelarea-checkbox"><label onclick="jQuery(\'input:eq(0)\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelResizableTop + '</label></td>'], ['<td class="ixedit-inputarea-checkbox ixedit-inputarea-checkbox">', true, '</td><td class="ixedit-labelarea-small ixedit-labelarea-checkbox"><label onclick="jQuery(\'input:eq(1)\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelResizableRight + '</label></td>'], ['<td class="ixedit-inputarea-checkbox ixedit-inputarea-checkbox">', true, '</td><td class="ixedit-labelarea-small ixedit-labelarea-checkbox"><label onclick="jQuery(\'input:eq(2)\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelResizableBottom + '</label></td>'], ['<td class="ixedit-inputarea-checkbox ixedit-inputarea-checkbox">', false, '</td><td class="ixedit-labelarea-small ixedit-labelarea-checkbox"><label onclick="jQuery(\'input:eq(3)\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelResizableLeft + '</label></td><td>&nbsp;</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-resizablehandle ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-resizablehandle ixedit-inputarea-checkbox">', false, '</td><td class="ixedit-labelarea-small ixedit-labelarea-checkbox"><label onclick="jQuery(\'input:eq(0)\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelResizableTR + '</label></td>'], ['<td class="ixedit-inputarea-checkbox ixedit-inputarea-checkbox">', true, '</td><td class="ixedit-labelarea-small ixedit-labelarea-checkbox"><label onclick="jQuery(\'input:eq(1)\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelResizableBR + '</label></td>'], ['<td class="ixedit-inputarea-checkbox ixedit-inputarea-checkbox">', false, '</td><td class="ixedit-labelarea-small ixedit-labelarea-checkbox"><label onclick="jQuery(\'input:eq(2)\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelResizableBL + '</label></td>'], ['<td class="ixedit-inputarea-checkbox ixedit-inputarea-checkbox">', false, '</td><td class="ixedit-labelarea-small ixedit-labelarea-checkbox"><label onclick="jQuery(\'input:eq(3)\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelResizableTL + '</label></td><td>&nbsp;</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-resizablecontainment ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-resizablecontainment ixedit-inputarea-checkbox">', false, '</td><td><label onclick="jQuery(\'input\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelResizableContainment + '</label></td></tr></table>']];
  newCmd.help = label.commandHelpResizable;
  newCmd.dontNeedDelay= true;
  newCmd.func = function(attributeArray, attributeSubArray){
    var optionsArray = new Array();
    var handlesArray = new Array();
    var additionalString = '';
    if(attributeArray[0]==true){
      optionsArray[optionsArray.length] = 'aspectRatio:true';
    };
    if(attributeArray[1]==true){
      handlesArray[handlesArray.length] = 'n';
    };
    if(attributeArray[2]==true){
      handlesArray[handlesArray.length] = 'e';
    };
    if(attributeArray[3]==true){
      handlesArray[handlesArray.length] = 's';
    };
    if(attributeArray[4]==true){
      handlesArray[handlesArray.length] = 'w';
    };
    if(attributeArray[5]==true){
      handlesArray[handlesArray.length] = 'ne';
    };
    if(attributeArray[6]==true){
      handlesArray[handlesArray.length] = 'se';
    };
    if(attributeArray[7]==true){
      handlesArray[handlesArray.length] = 'sw';
    };
    if(attributeArray[8]==true){
      handlesArray[handlesArray.length] = 'nw';
    };
    if(attributeArray[9]==true){
      optionsArray[optionsArray.length] = 'containment:\'parent\'';
    };
    if(handlesArray.length>0){
      var handlesString = 'handles:\'' + handlesArray.join(',') + '\'';
      optionsArray[optionsArray.length] = handlesString;
    };

    var optionsString = optionsArray.join(',');
    var commandString = this.name + '({' + optionsString + '})' + additionalString;

    return commandString;
  };
  cmds.resizable = newCmd;


  // Reorderable
  lang.en.cmdSNSortable = 'Reorderable';
  lang.zh.cmdSNSortable = '允许排序';
  lang.ja.cmdSNSortable = '並べ替え可能に';
  lang.en.commandHelpSortable = '<h2>About Reorderable Command</h2><p>Reorderable command will make the child block elements of the selected element reorderable by dragging with the mouse.</p><h3>Required HTML Format</h3><p>&lt;block id=\"reorderable1\"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content1&lt;/block&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content2&lt;/block&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content3&lt;/block&gt;<br />&lt;/block&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-sortable\" will be added to the reorderabled element (parent element of the draggabled items).</li></ul>';
  lang.zh.commandHelpSortable = '<h2>About Reorderable Command</h2><p>Reorderable command will make the child block elements of the selected element reorderable by dragging with the mouse.</p><h3>Required HTML Format</h3><p>&lt;block id=\"reorderable1\"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content1&lt;/block&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content2&lt;/block&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content3&lt;/block&gt;<br />&lt;/block&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-sortable\" will be added to the reorderabled element (parent element of the draggabled items).</li></ul>';
  lang.ja.commandHelpSortable = '<h2>並べ替え可能にコマンドについて</h2><p>並べ替え可能にコマンドは、セレクトされた要素の子ブロック要素をマウスドラッグで並べ替え可能にします。</p><h3>必要な HTML フォーマット</h3><p>&lt;block id=\"reorderable1\"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content1&lt;/block&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content2&lt;/block&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content3&lt;/block&gt;<br />&lt;/block&gt;</p><h3>動的なクラス</h3><p>これらの動的に追加されるクラス名を使ってスタイルを変更できます。</p><ul><li>\"ui-sortable\" 並べ替え可能にした要素（ドラッグ可能になったアイテムの親要素）に追加されます。</li></ul>';
  var newCmd = new cmd;
  newCmd.name = 'sortable';
  newCmd.screenName = label.cmdSNSortable;
  newCmd.category = ixedit.cmdCat[2];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-dragAxes ixedit-labelarea-default">' + label.inputLabelDragAxes + '</td><td class="ixedit-inputarea-inserthtmltype ixedit-inputarea-medium">', options.dragAxes, '</td><td>&nbsp;</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-reorderablemovecursor ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-reorderablemovecursor ixedit-inputarea-checkbox">', false, '</td><td><label onclick="jQuery(\'input\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelDraggableMoveCursor + '</label></td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-reorderableopacity ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-reorderableopacity ixedit-inputarea-checkbox">', false, '</td><td><label onclick="jQuery(\'input\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelDraggableOpacify + '</label></td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-reorderablerevert ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-reorderablerevert ixedit-inputarea-checkbox">', false, '</td><td><label onclick="jQuery(\'input\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelSortableRevert + '</label></td></tr></table>']];
  newCmd.help = label.commandHelpSortable;
  newCmd.dontNeedDelay= true;
  newCmd.func = function(attributeArray, attributeSubArray){
    var optionsArray = new Array();
    var additionalString = '';
    var axisString = '';
    switch(attributeArray[0]){
      case '0':
        axisString = '';
        break;
      case '1':
        axisString = 'axis:\'x\'';
        break;
      case '2':
        axisString = 'axis:\'y\'';
        break;
    };
    if(axisString!=''){
      optionsArray[optionsArray.length] = axisString;
    };
    if(attributeArray[1]==true){
      additionalString += '.css(\'cursor\', \'move\')';
    };
    if(attributeArray[2]==true){
      optionsArray[optionsArray.length] = 'opacity:0.5';
    };
    if(attributeArray[3]==true){
      optionsArray[optionsArray.length] = 'revert:true';
    };
  
    var optionsString = optionsArray.join(',');
    var commandString = 'sortable' + '({' + optionsString + '})' + additionalString;
    return commandString;
  };
  cmds.sortable= newCmd;

  // Selectable
  lang.en.cmdSNReorderable = 'Selectable';
  lang.zh.cmdSNReorderable = '允许选择';
  lang.ja.cmdSNReorderable = '選択可能に';
  lang.en.commandHelpSelectable = '<h2>About Selectable Command</h2><p>Selectable command will make the child block elements of the selected element selectable by clicking, ctrl+clicking, and dragging with the mouse.</p><h3>Required HTML Format</h3><p>&lt;block id=\"selectable1\"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content1&lt;/block&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content2&lt;/block&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content3&lt;/block&gt;<br />&lt;/block&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-selectable\" will be added to the selectabled element (parent element of the items you can select individually).</li><li>\"ui-selecting\" will added to each item during mousedown and drag-selecting.</li><li>\"ui-selected\" will be added to each selected item.</li></ul>';
  lang.zh.commandHelpSelectable = '<h2>About Selectable Command</h2><p>Selectable command will make the child block elements of the selected element selectable by clicking, ctrl+clicking, and dragging with the mouse.</p><h3>Required HTML Format</h3><p>&lt;block id=\"selectable1\"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content1&lt;/block&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content2&lt;/block&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content3&lt;/block&gt;<br />&lt;/block&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-selectable\" will be added to the selectabled element (parent element of the items you can select individually).</li><li>\"ui-selecting\" will added to each item during mousedown and drag-selecting.</li><li>\"ui-selected\" will be added to each selected item.</li></ul>';
  lang.ja.commandHelpSelectable = '<h2>選択可能にコマンドについて</h2><p>選択可能にコマンドは、セレクトされた要素の子ブロック要素をクリック、ctrl+クリック、マウスドラッグで選択可能にします。</p><h3>必要な HTML フォーマット</h3><p>&lt;block id=\"selectable1\"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content1&lt;/block&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content2&lt;/block&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content3&lt;/block&gt;<br />&lt;/block&gt;</p><h3>動的なクラス</h3><p>これらの動的に追加されるクラス名を使ってスタイルを変更できます。</p><ul><li>\"ui-selectable\" 選択可能にした要素（個別に選択できるアイテムの親要素）に追加されます。</li><li>\"ui-selecting\" 各アイテムをマウスダウンまたはドラッグ中に追加されます。</li><li>\"ui-selected\" 選択した各アイテムに追加されます。</li></ul>';
  var newCmd = new cmd;
  newCmd.name = 'selectable';
  newCmd.screenName = label.cmdSNReorderable;
  newCmd.category = ixedit.cmdCat[2];
  newCmd.attrs = [];
  newCmd.help = label.commandHelpSelectable;
  newCmd.dontNeedDelay= true;
  newCmd.func = function(attributeArray, attributeSubArray){
    var additionalString = '';
    additionalString += '.css(\'cursor\', \'default\')';
    var commandString = 'selectable' + '()' + additionalString;
    return commandString;
  };
  cmds.selectable = newCmd;



  // Date Picker
  lang.en.cmdSNDatePicker = 'Make Date Picker';
  lang.zh.cmdSNDatePicker = '生成日期选择控件';
  lang.ja.cmdSNDatePicker = '日付ピッカー作成';
  lang.en.commandHelpDatePicker = '<h2>About Make Date Picker Command</h2><p>Make Date Picker command will generate a date picker calendar for the selected textbox.</p><h3>Required HTML Format</h3><p>&lt;input type=\"text\" id=\"datepicker1\" /&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-datepicker\" will be added to the generated calendar block.</li><li>\"ui-datepicker-header\" will be added to the header of the calendar.</li><li>\"ui-datepicker-prev\" and \"ui-datepicker-next\" will be added to the navigation links within the header.</li><li>\"ui-datepicker-prev-hover\" and \"ui-datepicker-next-hover\" will be added to the navigation links durting mouse-hovered.</li><li>\"ui-datepicker-title\" will be added to the title widthin the header.</li><li>\"ui-datepicker-calendar\" will be added to the calendar table.</li><li>\"ui-state-active\" will added to the selected day link.</li><li>\"ui-state-highlight\" will added to the current day link.</li><li>\"ui-state-hover\" will added to each day link during mouse-hovered.</li><li>\"ui-datepicker-buttonpane\" will be added to the button pane.</li><li>\"ui-datepicker-trigger\" will be added to the picker button.</li></ul><p>For more information about dynamically-added classes, see<a href=\"http://jqueryui.com/demos/datepicker/\" target=\"_blank\"> jQuery UI Datepicker documentation</a>.</p><p>You can also change styles with the <a href=\"http://jqueryui.com/themeroller/\" target=\"_blank\">ThemeRoller</a> tool by accessing jQuery UI CSS framework.</p>';
  lang.zh.commandHelpDatePicker = '<h2>About Make Date Picker Command</h2><p>Make Date Picker command will generate a date picker calendar for the selected textbox.</p><h3>Required HTML Format</h3><p>&lt;input type=\"text\" id=\"datepicker1\" /&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-datepicker\" will be added to the generated calendar block.</li><li>\"ui-datepicker-header\" will be added to the header of the calendar.</li><li>\"ui-datepicker-prev\" and \"ui-datepicker-next\" will be added to the navigation links within the header.</li><li>\"ui-datepicker-prev-hover\" and \"ui-datepicker-next-hover\" will be added to the navigation links durting mouse-hovered.</li><li>\"ui-datepicker-title\" will be added to the title widthin the header.</li><li>\"ui-datepicker-calendar\" will be added to the calendar table.</li><li>\"ui-state-active\" will added to the selected day link.</li><li>\"ui-state-highlight\" will added to the current day link.</li><li>\"ui-state-hover\" will added to each day link during mouse-hovered.</li><li>\"ui-datepicker-buttonpane\" will be added to the button pane.</li><li>\"ui-datepicker-trigger\" will be added to the picker button.</li></ul><p>For more information about dynamically-added classes, see<a href=\"http://jqueryui.com/demos/datepicker/\" target=\"_blank\"> jQuery UI Datepicker documentation</a>.</p><p>You can also change styles with the <a href=\"http://jqueryui.com/themeroller/\" target=\"_blank\">ThemeRoller</a> tool by accessing jQuery UI CSS framework.</p>';
  lang.ja.commandHelpDatePicker = '<h2>日付ピッカー作成コマンドについて</h2><p>日付ピッカー作成コマンドは、セレクトしたテキストボックスに日付選択用のカレンダーを生成します。</p><h3>必要な HTML フォーマット</h3><p>&lt;input type=\"text\" id=\"datepicker1\" /&gt;</p><h3>動的なクラス</h3><p>これらの動的に追加されるクラス名を使ってスタイルを変更できます。<ul><li>\"ui-datepicker\" 生成されるカレンダーブロックに追加されます。</li><li>\"ui-datepicker-header\" カレンダーのヘッダーに追加されます。</li><li>\"ui-datepicker-prev\" と \"ui-datepicker-next\" ヘッダー内のナビゲーションリンクに追加されます。</li><li>\"ui-datepicker-prev-hover\" と \"ui-datepicker-next-hover\" ヘッダー内のナビゲーションリンクにマウスをホーバーした時に追加されます。</li><li>\"ui-datepicker-title\" ヘッダー内のタイトルに追加されます。</li><li>\"ui-datepicker-calendar\" カレンダーテーブルに追加されます。</li><li>\"ui-state-active\" 選択された日リンクに追加されます。</li><li>\"ui-state-highlight\" 現在の日リンクに追加されます。</li><li>\"ui-state-hover\" マウスホーバー時に各日リンクに追加されます。</li><li>\"ui-datepicker-buttonpane\" ボタンペインに追加されます。</li><li>\"ui-datepicker-trigger\" ピッカーボタンに追加されます。</li></ul><p>動的に追加されるクラス名についての詳細は、<a href=\"http://jqueryui.com/demos/datepicker/\" target=\"_blank\">jQuery UI Datepicker のドキュメンテーション</a>を参照してください。</p><p><a href=\"http://jqueryui.com/themeroller/\" target=\"_blank\">ThemeRoller</a> ツールを使って jQuery UI の CSS フレームワームにアクセスし、スタイルを一括変更することもできます。</p>';
  var newCmd = new cmd;
  newCmd.name = 'datepicker';
  newCmd.screenName = label.cmdSNDatePicker;
  newCmd.category = ixedit.cmdCat[2];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-datepickerformat ixedit-labelarea-default">' + label.inputLabelDatePickerFormat + '</td><td class="ixedit-inputarea-datepickerformat ixedit-inputarea-xlarge">', options.datePickerFormats, '</td><td>&nbsp;</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-datepickericon ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-datepickericon ixedit-inputarea-checkbox">', false, '</td><td><label onclick="jQuery(\'input\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelDatePickerHasButton + '</label></td></tr></table>']];
  newCmd.help = label.commandHelpDatePicker;
  newCmd.dontNeedDelay= true;
  newCmd.func = function(attributeArray, attributeSubArray){

    var dayNamesMins = '[\'' + label.dayNameMinSu + '\', \'' + label.dayNameMinMo + '\', \'' + label.dayNameMinTu + '\', \'' + label.dayNameMinWe + '\', \'' + label.dayNameMinTh + '\', \'' + label.dayNameMinFr + '\', \'' + label.dayNameMinSa + '\']';
    

    var optionsArray = new Array();

    optionsArray[optionsArray.length] = 'dateFormat:\'' + attributeArray[0] + '\'';
    optionsArray[optionsArray.length] = 'dayNamesMin:[\'' + label.dayNamesMinSu + '\', \'' + label.dayNamesMinMo + '\', \'' + label.dayNamesMinTu + '\', \'' + label.dayNamesMinWe + '\', \'' + label.dayNamesMinTh + '\', \'' + label.dayNamesMinFr + '\', \'' + label.dayNamesMinSa + '\']';
    optionsArray[optionsArray.length] = 'dayNamesShort:[\'' + label.dayNamesShortSu + '\', \'' + label.dayNamesShortMo + '\', \'' + label.dayNamesShortTu + '\', \'' + label.dayNamesShortWe + '\', \'' + label.dayNamesShortTh + '\', \'' + label.dayNamesShortFr + '\', \'' + label.dayNamesShortSa + '\']';
    optionsArray[optionsArray.length] = 'monthNames:[\'' + label.monthNames1 + '\', \'' + label.monthNames2 + '\', \'' + label.monthNames3 + '\', \'' + label.monthNames4 + '\', \'' + label.monthNames5 + '\', \'' + label.monthNames6 + '\', \'' + label.monthNames7 + '\', \'' + label.monthNames8 + '\', \'' + label.monthNames9 + '\', \'' + label.monthNames10 + '\', \'' + label.monthNames11 + '\', \'' + label.monthNames12 + '\']';
    optionsArray[optionsArray.length] = 'monthNamesShort:[\'' + label.monthNamesShort1 + '\', \'' + label.monthNamesShort2 + '\', \'' + label.monthNamesShort3 + '\', \'' + label.monthNamesShort4 + '\', \'' + label.monthNamesShort5 + '\', \'' + label.monthNamesShort6 + '\', \'' + label.monthNamesShort7 + '\', \'' + label.monthNamesShort8 + '\', \'' + label.monthNamesShort9 + '\', \'' + label.monthNamesShort10 + '\', \'' + label.monthNamesShort11 + '\', \'' + label.monthNamesShort12 + '\']';



    if(attributeArray[1]==true){
      optionsArray[optionsArray.length] = 'showOn:\'button\'';
    };
    if(ixedit.label==ixedit.lang['ja']){
      optionsArray[optionsArray.length] = 'showMonthAfterYear:true';
    };
    // Bug? This doesnt work. So comment this out.
    //optionsArray[optionsArray.length] = 'gotoCurrent:true';
    optionsArray[optionsArray.length] = 'showButtonPanel: true'; 
    optionsArray[optionsArray.length] = 'currentText: \'' + label.datePickerToday + '\'';
    optionsArray[optionsArray.length] = 'closeText: \'' + label.datePickerClose + '\'';

    var optionsString = optionsArray.join(',');

    var commandString = 'datepicker' + '({' + optionsString + '})';

    return commandString;
  };
  cmds.datepicker = newCmd;




  // Accordion
  lang.en.cmdSNAccordion = 'Make Accordion';
  lang.zh.cmdSNAccordion = '生成折叠面板';
  lang.ja.cmdSNAccordion = 'アコーディオン作成';
  lang.en.commandHelpAccordion = '<h2>About Make Accordion Command</h2><p>Make Accordion command will generate an accordion container.</p><h3>Required HTML Format</h3><p>&lt;block id=\"accordion1\"&gt;<br />&nbsp;&nbsp;&lt;block&gt;&lt;a href=&quot;#&quot;&gt;Header1&lt;/a&gt;&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;Content1&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;&lt;a href=&quot;#&quot;&gt;Header2&lt;/a&gt;&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;Content2&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;&lt;a href=&quot;#&quot;&gt;Header3&lt;/a&gt;&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;Content3&lt;/block&gt;<br />&lt;/block&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-accordion\" will be added to the wrapper block which contains all headers and contents.</li><li>\"ui-accordion-header\" will be added to the header blocks.</li><li>\"ui-accordion-content\" will be added to the content blocks.</li><li>\"ui-state-active\" will added to the selected header block</li><li>\"ui-state-hover\" will added to each header block during mouse-hovered.</li></ul><p>You can also change styles with the <a href=\"http://jqueryui.com/themeroller/\" target=\"_blank\">ThemeRoller</a> tool by accessing jQuery UI CSS framework.</p>';
  lang.zh.commandHelpAccordion = '<h2>About Make Accordion Command</h2><p>Make Accordion command will generate an accordion container.</p><h3>Required HTML Format</h3><p>&lt;block id=\"accordion1\"&gt;<br />&nbsp;&nbsp;&lt;block&gt;&lt;a href=&quot;#&quot;&gt;Header1&lt;/a&gt;&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;Content1&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;&lt;a href=&quot;#&quot;&gt;Header2&lt;/a&gt;&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;Content2&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;&lt;a href=&quot;#&quot;&gt;Header3&lt;/a&gt;&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;Content3&lt;/block&gt;<br />&lt;/block&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-accordion\" will be added to the wrapper block which contains all headers and contents.</li><li>\"ui-accordion-header\" will be added to the header blocks.</li><li>\"ui-accordion-content\" will be added to the content blocks.</li><li>\"ui-state-active\" will added to the selected header block</li><li>\"ui-state-hover\" will added to each header block during mouse-hovered.</li></ul><p>You can also change styles with the <a href=\"http://jqueryui.com/themeroller/\" target=\"_blank\">ThemeRoller</a> tool by accessing jQuery UI CSS framework.</p>';
  lang.ja.commandHelpAccordion = '<h2>アコーディオン作成コマンドについて</h2><p>アコーディオン作成コマンドは、アコーディオンコンテナーを生成します。</p><h3>必要な HTML フォーマット</h3><p>&lt;block id=\"accordion1\"&gt;<br />&nbsp;&nbsp;&lt;block&gt;&lt;a href=&quot;#&quot;&gt;Header1&lt;/a&gt;&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;Content1&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;&lt;a href=&quot;#&quot;&gt;Header2&lt;/a&gt;&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;Content2&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;&lt;a href=&quot;#&quot;&gt;Header3&lt;/a&gt;&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;Content3&lt;/block&gt;<br />&lt;/block&gt;</p><h3>動的なクラス</h3><p>これらの動的に追加されるクラス名を使ってスタイルを変更できます。<ul><li>\"ui-accordion\" すべてのヘッダーとコンテンツを含む親要素に追加されます。</li><li>\"ui-accordion-header\" ヘッダーブロックに追加されます。</li><li>\"ui-accordion-content\" コンテンツブロックに追加されます。</li><li>\"ui-state-active\" 選択されたヘッダーブロックに追加されます。</li><li>\"ui-state-hover\" 各ヘッダーブロックへのマウスホーバー時に追加されます。</li></ul><p><a href=\"http://jqueryui.com/themeroller/\" target=\"_blank\">ThemeRoller</a> ツールを使って jQuery UI の CSS フレームワームにアクセスし、スタイルを一括変更することもできます。</p>';
  var newCmd = new cmd;
  newCmd.name = 'accordion';
  newCmd.screenName = label.cmdSNAccordion;
  newCmd.category = ixedit.cmdCat[2];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-accordioneventname ixedit-labelarea-default">' + label.inputLabelEventName + '</td><td class="ixedit-inputarea-accordioneventname ixedit-inputarea-xlarge">', options.eventHandlersForAccordion, '</td><td>&nbsp;</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-accordionautoheight ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-accordionautoheight ixedit-inputarea-checkbox">', false, '</td><td><label onclick="jQuery(\'input\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelAccordionAutoHeight + '</label></td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-accordioncollapsible ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-accordioncollapsible ixedit-inputarea-checkbox">', false, '</td><td><label onclick="jQuery(\'input\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelAccordionCollapsible + '</label></td></tr></table>']];
  newCmd.help = label.commandHelpAccordion;
  newCmd.dontNeedDelay= true;
  newCmd.func = function(attributeArray, attributeSubArray){
    var optionsArray = new Array();
    optionsArray[optionsArray.length] = 'event:\'' + attributeArray[0] + '\''; // event
    if(attributeArray[1]==false){ // autoHeight
      optionsArray[optionsArray.length] = 'autoHeight:false';
    };
    if(attributeArray[2]==true){ // collapseble
      optionsArray[optionsArray.length] = 'collapsible:true';
    };
    var optionsString = optionsArray.join(',');

    var commandString = 'accordion' + '({' + optionsString + '})';

    return commandString;
  };
  cmds.accordion = newCmd;


  // Tabs
  lang.en.cmdSNTabs = 'Make Tabs';
  lang.zh.cmdSNTabs = '生成tab';
  lang.ja.cmdSNTabs = 'タブ作成';
  lang.en.commandHelpTabs = '<h2>About Make Tabs Command</h2><p>Make Tabs command will generate tabs container.</p><h3>Required HTML Format</h3><p>&lt;block id=&quot;tabs1&quot;&gt;<br />&nbsp;&nbsp;&lt;ul&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#content1&quot;&gt;Tab1&lt;/a&gt;&lt;/li&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#content2&quot;&gt;Tab2&lt;/a&gt;&lt;/li&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#content3&quot;&gt;Tab3&lt;/a&gt;&lt;/li&gt;<br />&nbsp;&nbsp;&lt;/ul&gt;<br />&nbsp;&nbsp;&lt;block id=&quot;content1&quot;&gt;Content1&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block id=&quot;content2&quot;&gt;Content2&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block id=&quot;content3&quot;&gt;Content3&lt;/block&gt;<br />&lt;/block&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-tabs\" will be added to the wrapper block which contains all tabs and content blocks.</li><li>\"ui-tabs-nav\" will be added to the UL element which contains items to become tabs.</li><li>\"ui-tabs-selected\" and \"ui-state-active\" will be added to the selected tab (LI element).</li><li>\"ui-state-hover\" will added to each tab (LI element) during mouse-hovered.</li><li>\"ui-tabs-panel\" will be added to each content blocks.</li></ul><p>You can also change styles with the <a href=\"http://jqueryui.com/themeroller/\" target=\"_blank\">ThemeRoller</a> tool by accessing jQuery UI CSS framework.</p>';
  lang.zh.commandHelpTabs = '<h2>About Make Tabs Command</h2><p>Make Tabs command will generate tabs container.</p><h3>Required HTML Format</h3><p>&lt;block id=&quot;tabs1&quot;&gt;<br />&nbsp;&nbsp;&lt;ul&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#content1&quot;&gt;Tab1&lt;/a&gt;&lt;/li&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#content2&quot;&gt;Tab2&lt;/a&gt;&lt;/li&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#content3&quot;&gt;Tab3&lt;/a&gt;&lt;/li&gt;<br />&nbsp;&nbsp;&lt;/ul&gt;<br />&nbsp;&nbsp;&lt;block id=&quot;content1&quot;&gt;Content1&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block id=&quot;content2&quot;&gt;Content2&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block id=&quot;content3&quot;&gt;Content3&lt;/block&gt;<br />&lt;/block&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-tabs\" will be added to the wrapper block which contains all tabs and content blocks.</li><li>\"ui-tabs-nav\" will be added to the UL element which contains items to become tabs.</li><li>\"ui-tabs-selected\" and \"ui-state-active\" will be added to the selected tab (LI element).</li><li>\"ui-state-hover\" will added to each tab (LI element) during mouse-hovered.</li><li>\"ui-tabs-panel\" will be added to each content blocks.</li></ul><p>You can also change styles with the <a href=\"http://jqueryui.com/themeroller/\" target=\"_blank\">ThemeRoller</a> tool by accessing jQuery UI CSS framework.</p>';
  lang.ja.commandHelpTabs = '<h2>タブ作成コマンドについて</h2><p>タブ作成コマンドは、タブコンテナーを生成します。</p><h3>必要な HTML フォーマット</h3><p>&lt;block id=&quot;tabs1&quot;&gt;<br />&nbsp;&nbsp;&lt;ul&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#content1&quot;&gt;Tab1&lt;/a&gt;&lt;/li&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#content2&quot;&gt;Tab2&lt;/a&gt;&lt;/li&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#content3&quot;&gt;Tab3&lt;/a&gt;&lt;/li&gt;<br />&nbsp;&nbsp;&lt;/ul&gt;<br />&nbsp;&nbsp;&lt;block id=&quot;content1&quot;&gt;Content1&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block id=&quot;content2&quot;&gt;Content2&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block id=&quot;content3&quot;&gt;Content3&lt;/block&gt;<br />&lt;/block&gt;</p><h3>動的なクラス</h3><p>これらの動的に追加されるクラス名を使ってスタイルを変更できます。<ul><li>\"ui-tabs\" すべてのタブとコンテンツブロックを含む親要素に追加されます。</li><li>\"ui-tabs-nav\" タブとなる項目を含む UL 要素に追加されます。</li><li>\"ui-tabs-selected\" と \"ui-state-active\" 選択されたタブ（LI 要素）に追加されます。</li><li>\"ui-state-hover\" 各タブ（LI 要素）へのマウスホーバー時に追加されます。</li><li>\"ui-tabs-panel\" 各コンテンツブロックに追加されます。</li></ul><p><a href=\"http://jqueryui.com/themeroller/\" target=\"_blank\">ThemeRoller</a> ツールを使って jQuery UI の CSS フレームワームにアクセスし、スタイルを一括変更することもできます。</p>';
  var newCmd = new cmd;
  newCmd.name = 'tabs';
  newCmd.screenName = label.cmdSNTabs;
  newCmd.category = ixedit.cmdCat[2];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-accordioneventname ixedit-labelarea-default">' + label.inputLabelEventName + '</td><td class="ixedit-inputarea-accordioneventname ixedit-inputarea-xlarge">', options.eventHandlersForAccordion, '</td><td>&nbsp;</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-tabsselected ixedit-labelarea-default">' + label.inputLabelTabsSelected + '</td><td class="ixedit-inputarea-tabsselected ixedit-inputarea-xsmall">', '', '</td><td>&nbsp;' + label.inputLabelTabsSelectedAnnotation + '</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-accordioncollapsible ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-accordioncollapsible ixedit-inputarea-checkbox">', false, '</td><td><label onclick="jQuery(\'input\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelAccordionCollapsible + '</label></td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-resizablehandle ixedit-labelarea-default">' + label.inputLabelEffect + '</td><td class="ixedit-inputarea-resizablehandle ixedit-inputarea-checkbox">', false, '</td><td class="ixedit-labelarea-medium ixedit-labelarea-checkbox"><label onclick="jQuery(\'input:eq(0)\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelTabsFade + '</label></td>'], ['<td class="ixedit-inputarea-checkbox ixedit-inputarea-checkbox">', false, '</td><td class="ixedit-labelarea-medium ixedit-labelarea-checkbox"><label onclick="jQuery(\'input:eq(1)\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelTabsSlide + '</label></td><td>&nbsp;</td></tr></table>']];
  newCmd.help = label.commandHelpTabs;
  newCmd.dontNeedDelay= true;
  newCmd.func = function(attributeArray, attributeSubArray){
    var optionsArray = new Array();
    optionsArray[optionsArray.length] = 'event:\'' + attributeArray[0] + '\''; // event
    if(attributeArray[1]!=''){ // selectet tab index
      var theVal = parseInt(attributeArray[1]);
      if(isNaN(theVal)==false){
        theVal = theVal - 1;
        if(theVal < -1){
          theVal = -1;
        };
        optionsArray[optionsArray.length] = 'selected:' + theVal;
      }
    };
    if(attributeArray[2]==true){ // collapsible
      optionsArray[optionsArray.length] = 'collapsible:true';
    };

    var fx0 = attributeArray[3];
    var fx1 = attributeArray[4];
    if(fx0==true || fx1==true){ // fx
      var fxParam = new Array();
      if(fx0==true){
        fxParam[fxParam.length] = 'opacity:\'toggle\'';
      };
      if(fx1==true){
        fxParam[fxParam.length] = 'height:\'toggle\'';
      };
      fxParam[fxParam.length] = 'duration:\'normal\'';

      var fxParamString = fxParam.join(',');
      var fxString = 'fx:{' + fxParamString + '}';
      optionsArray[optionsArray.length] = fxString;
    };

    var optionsString = optionsArray.join(',');

    var commandString = 'tabs' + '({' + optionsString + '})';

    return commandString;
  };
  cmds.tabs = newCmd;



  // Dialog
  lang.en.cmdSNDialog = 'Make Dialog';
  lang.zh.cmdSNDialog = '生成弹出对话框';
  lang.ja.cmdSNDialog = 'ダイアログ作成';
  lang.en.commandHelpDialog = '<h2>About Make Dialog Command</h2><p>Make Dialog command will generate a modal dialog. A wrapper block, a titlebar, and a button pane will be generated around the original block.</p><h3>Required HTML Format</h3><p>&lt;div id=&quot;dialog1&quot; title=&quot;My Dialog1&quot;&gt;Content&lt;/div&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-dialog\" will be added to the wrapper block which is generated dynamically to wrap the selected block, the titlebar and the button bar.</li><li>\"ui-dialog-titlebar\" will be added to the dynamically-generated titlebar.</li><li>\"ui-dialog-title-dialog\" will be added to the dynamically-generated title on the titlebar. The title string is from the title attribute of the selected element.</li><li>\"ui-dialog-titlebar-close\" will added to the dynamically-generated close link on the titlebar.</li><li>\"ui-dialog-content\" will be added to the selected element.</li><li>\"ui-dialog-buttonpane\" will be added to the dynamically-generated button pane.</li><li>\"ui-widget-overlay\" will be added to the dynamically-generated background overlay.</li></ul><p>You can also change styles with the <a href=\"http://jqueryui.com/themeroller/\" target=\"_blank\">ThemeRoller</a> tool by accessing jQuery UI CSS framework.</p>';
  lang.zh.commandHelpDialog = '<h2>About Make Dialog Command</h2><p>Make Dialog command will generate a modal dialog. A wrapper block, a titlebar, and a button pane will be generated around the original block.</p><h3>Required HTML Format</h3><p>&lt;div id=&quot;dialog1&quot; title=&quot;My Dialog1&quot;&gt;Content&lt;/div&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>\"ui-dialog\" will be added to the wrapper block which is generated dynamically to wrap the selected block, the titlebar and the button bar.</li><li>\"ui-dialog-titlebar\" will be added to the dynamically-generated titlebar.</li><li>\"ui-dialog-title-dialog\" will be added to the dynamically-generated title on the titlebar. The title string is from the title attribute of the selected element.</li><li>\"ui-dialog-titlebar-close\" will added to the dynamically-generated close link on the titlebar.</li><li>\"ui-dialog-content\" will be added to the selected element.</li><li>\"ui-dialog-buttonpane\" will be added to the dynamically-generated button pane.</li><li>\"ui-widget-overlay\" will be added to the dynamically-generated background overlay.</li></ul><p>You can also change styles with the <a href=\"http://jqueryui.com/themeroller/\" target=\"_blank\">ThemeRoller</a> tool by accessing jQuery UI CSS framework.</p>';
  lang.ja.commandHelpDialog = '<h2>ダイアログ作成コマンドについて</h2><p>ダイアログ作成コマンドは、モーダルダイアログを生成します。ラッパーブロック、タイトルバー、そしてボタンペインが元のブロックの周りに生成されます。</p><h3>必要な HTML フォーマット</h3><p>&lt;div id=&quot;dialog1&quot; title=&quot;My Dialog1&quot;&gt;Content&lt;/div&gt;</p><h3>動的なクラス</h3><p>これらの動的に追加されるクラス名を使ってスタイルを変更できます。<ul><li>\"ui-dialog\" 動的に生成されるラッパーブロックに追加されます。セレクトした要素、タイトルバー、ボタンペインは、このラッパーブロックの中に入ります。</li><li>\"ui-dialog-titlebar\" 動的に生成されるタイトルバーに追加されます。</li><li>\"ui-dialog-title-dialog\" タイトルバー上に動的に生成されるタイトルに追加されます。タイトル文字列はセレクトした要素のタイトル属性から作られます。</li><li>\"ui-dialog-titlebar-close\" タイトルバー上に動的に生成されるクローズリンクに追加されます。</li><li>\"ui-dialog-content\" セレクトされた要素に追加されます。</li><li>\"ui-dialog-buttonpane\" 動的に生成されるボタンペインに追加されます。</li><li>\"ui-widget-overlay\" 動的に生成される背景オーバーレイに追加されます。</li></ul><p><a href=\"http://jqueryui.com/themeroller/\" target=\"_blank\">ThemeRoller</a> ツールを使って jQuery UI の CSS フレームワームにアクセスし、スタイルを一括変更することもできます。</p>';
  var newCmd = new cmd;
  newCmd.name = 'dialog';
  newCmd.screenName = label.cmdSNDialog;
  newCmd.category = ixedit.cmdCat[2];
  newCmd.subParamAttrsHTMLs = new Array();
  newCmd.subParamAttrsHTMLs[0] = '<td class="ixedit-labelarea-dialogbutton ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-labelarea-dialogbuttonlabel ixedit-labelarea-small">' + label.inputLabelDialogLabel + '</td><td class="ixedit-input-dialogbuttonlabel"><input class="ixedit-inputitem-sub ixedit-inputitem-sub-textbox" type="text" /></td>';
  newCmd.subParamAttrsHTMLs[1] = '<td class="ixedit-labelarea-dialogbuttonid ixedit-labelarea-xsmall">' + label.inputLabelDialogId + '</td><td class="ixedit-input-dialogbuttonid"><input class="ixedit-inputitem-sub ixedit-inputitem-sub-textbox" type="text" /></td>';
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-dialogwidth ixedit-labelarea-default">' + label.inputLabelDialogWidth + '</td><td class="ixedit-inputarea-dialogwidth ixedit-inputarea-small">', '', '</td><td>px</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-dialogheight ixedit-labelarea-default">' + label.inputLabelDialogHeight + '</td><td class="ixedit-inputarea-dialogheight ixedit-inputarea-small">', '', '</td><td>px</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-dialogleft ixedit-labelarea-default">' + label.inputLabelDialogLeft + '</td><td class="ixedit-inputarea-dialogleft ixedit-inputarea-small">', '', '</td><td>px&nbsp;&nbsp;' + label.inputLabelDialogLeftAnnotation + '</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-dialogtop ixedit-labelarea-default">' + label.inputLabelDialogTop + '</td><td class="ixedit-inputarea-dialogtop ixedit-inputarea-small">', '', '</td><td>px&nbsp;&nbsp;' + label.inputLabelDialogTopAnnotation + '</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-dialogdraggable ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-dialogdraggable ixedit-inputarea-checkbox">', true, '</td><td><label onclick="jQuery(\'input\', jQuery(this).closest(\'tr\')).trigger(\'click\')">' + label.inputLabelDialogDraggable + '</label></td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-dialogbutton ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-dialogbutton ixedit-inputarea-checkbox">', false, '</td><td><label onclick="jQuery(\'input\', jQuery(this).closest(\'tr\')).trigger(\'click\').trigger(\'change\')">' + label.inputLabelDialogButtons + '</label></td></tr></table>'], ['', ixedit.makeSubParams, '']];
  newCmd.initFunc=function(theTarget){
    var theSP = jQuery('.subparam', theTarget);
    var theBtnCB = jQuery('.ixedit-dialog-6', theTarget);
    if(theBtnCB.is(':checked')){
      theSP.show();
    }else{
      theSP.hide();
    };
    theBtnCB.on('change', function(){
      var theSP = jQuery('.subparam', theTarget);
      if($(this).is(':checked')){
        theSP.show();
      }else{
        theSP.hide();
      }
    })
  };
  newCmd.afterValueLoadedFunc=function(theTarget){
    var theSP = jQuery('.subparam', theTarget);
    var theBtnCB = jQuery('.ixedit-dialog-6', theTarget);
    if(theBtnCB.is(':checked')){
      theSP.show();
    }else{
      theSP.hide();
    }
  };
  newCmd.help = label.commandHelpDialog;
  newCmd.dontNeedDelay= true;
  newCmd.func = function(attributeArray, attributeSubArray){
    var optionsArray = new Array();

    optionsArray[optionsArray.length] = 'autoOpen:false';
    optionsArray[optionsArray.length] = 'bgiframe:true';
    optionsArray[optionsArray.length] = 'modal:true';
    optionsArray[optionsArray.length] = 'resizable:false';


    if(attributeArray[0]!=''){
      optionsArray[optionsArray.length] = 'width:' + attributeArray[0];
    };
    if(attributeArray[1]!=''){
      optionsArray[optionsArray.length] = 'height:' + attributeArray[1];
    };
    if(attributeArray[2]==''){
      var theH = '\'center\'';
    }else if(attributeArray[2]=='-'){
      var theH = '\'right\'';
    }else{
      var theH = attributeArray[2];
    };
    if(attributeArray[3]==''){
      var theV = '\'center\'';
    }else if(attributeArray[3]=='-'){
      var theV = '\'bottom\'';
    }else{
      var theV = attributeArray[3];
    };
    optionsArray[optionsArray.length] = 'position:[' + theH + ', ' + theV + ']';


    if(attributeArray[4]==true){
      optionsArray[optionsArray.length] = 'draggable:true';
    }else{
      optionsArray[optionsArray.length] = 'draggable:false';
    };

    additionalString = '';

    if(attributeArray[5]==true){
      var btnIDs = new Array(); // Array for button IDs to be generated.
      var btnNames = new Array(); // Generate sub parameters for each labels of generated buttons.
      var theLen = attributeSubArray.length;
      for(var i=0; i<theLen; i++){ 
        btnNames[btnNames.length] = '\'' + attributeSubArray[i][0] + '\':function(){jQuery(this).dialog(\'close\')}';
        btnIDs[btnIDs.length] = attributeSubArray[i][1];
      };
      var subParamsString = btnNames.join(',');
      optionsArray[optionsArray.length] = 'buttons:{' + subParamsString + '}';
      // Make string to add ID to button.
      additionalString += 'var theBtnPane = jQuery(\'.ui-dialog-buttonpane\', target.closest(\'.ui-dialog\'));';
      for(k=0; k<btnIDs.length; k++){
        additionalString += 'jQuery(\'button:eq(' + k + ')\', theBtnPane).attr(\'id\', \'' + btnIDs[k] + '\');'
      }
    };

    var optionsString = optionsArray.join(',');

    var commandString = 'show(); if(!target.dialog(\'isOpen\')){target.dialog({' + optionsString + '})}; target.dialog(\'open\');' + additionalString;

    return commandString;
  };
  cmds.dialog = newCmd;



  // Window Alert
  lang.en.cmdSNAlert = 'Alert';
  lang.zh.cmdSNAlert = 'Alert警告';
  lang.ja.cmdSNAlert = 'アラート';
  lang.en.commandHelpAlert = '<h2>About Alert Command</h2><p>Alert command will show a regular alertbox generated by JavaScript\'s \"window.alert()\" function with the specified message string. You can use \"\\n\" for return and \"\\t\" for tab spacing, but single quotation will be ignored.</p>';
  lang.zh.commandHelpAlert = '<h2>About Alert Command</h2><p>Alert command will show a regular alertbox generated by JavaScript\'s \"window.alert()\" function with the specified message string. You can use \"\\n\" for return and \"\\t\" for tab spacing, but single quotation will be ignored.</p>';
  lang.ja.commandHelpAlert = '<h2>アラートコマンドについて</h2><p>アラートコマンドは、JavaScript の \"window.alert()\" ファンクションを使って、指定のメッセージ文字列とともに通常のアラートボックスを表示します。\"\\n\" を改行に、\"\\t\" をタブスペースに使えますが、シングルクォーテーションは無効です。</p>';
  var newCmd = new cmd;
  newCmd.name = 'alert';
  newCmd.screenName = label.cmdSNAlert;
  newCmd.category = ixedit.cmdCat[11];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-alertmessage ixedit-labelarea-default">' + label.inputLabelAlertMessage + '</td><td class="ixedit-inputarea-alertmessage">', '', '</td></tr></table>']];
  newCmd.help = label.commandHelpAlert;
  newCmd.dontNeedTarget = true;
  newCmd.func = function(attributeArray, attributeSubArray){
    var theMessage = attributeArray[0].replace(/'/g,''); // Delete single quote.
    theMessage = theMessage.replace(/"/g,'\"'); // Escape double quote.
    var commandString = 'window.alert(\'' + theMessage + '\')';
    return commandString;
  };
  cmds.alert = newCmd;


  // Jump
  lang.en.cmdSNJump = 'Jump';
  lang.zh.cmdSNJump = '跳转';
  lang.ja.cmdSNJump = 'ジャンプ';
  lang.en.commandHelpJump = '<h2>About Jump Command</h2><p>Jump command will make the browser access the specified URL.</p>';
  lang.zh.commandHelpJump = '<h2>About Jump Command</h2><p>Jump command will make the browser access the specified URL.</p>';
  lang.ja.commandHelpJump = '<h2>ジャンプコマンドについて</h2><p>ジャンプコマンドによって、ブラウザは指定の URL にアクセスします。</p>';
  var newCmd = new cmd;
  newCmd.name = 'jump';
  newCmd.screenName = label.cmdSNJump;
  newCmd.category = ixedit.cmdCat[11];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-jumpurl ixedit-labelarea-default">' + label.inputLabelJumpUrl + '</td><td class="ixedit-inputarea-jumpurl">', '', '</td></tr></table>']];
  newCmd.help = label.commandHelpJump;
  newCmd.dontNeedTarget = true;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = 'window.location.href=(\'' + attributeArray[0] + '\')';
    return commandString;
  };
  cmds.jump = newCmd;



  // Send Event
  lang.en.cmdSNTrigger = 'Send Event';
  lang.zh.cmdSNTrigger = '发送事件';
  lang.ja.cmdSNTrigger = 'イベント発行';
  lang.en.commandHelpTrigger = '<h2>About Send Event Command</h2><p>Send Event command will send the specified event to the selected element. For example, if you send a \"Click\" event to the element \"#button1\", the same thing will happen as you click \"#button1\".</p>';
  lang.zh.commandHelpTrigger = '<h2>About Send Event Command</h2><p>Send Event command will send the specified event to the selected element. For example, if you send a \"Click\" event to the element \"#button1\", the same thing will happen as you click \"#button1\".</p>';
  lang.ja.commandHelpTrigger = '<h2>イベント発行コマンドについて</h2><p>イベント発行コマンドは、指定のイベントをセレクトした要素に送ります。例えば、「#button1」という要素に「Click」イベントを送ると、「#button1」をクリックしたのと同じことが起こります。</p>';
  var newCmd = new cmd();
  newCmd.name = 'trigger';
  newCmd.screenName = label.cmdSNTrigger;
  newCmd.category = ixedit.cmdCat[11];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-sendeventname ixedit-labelarea-default">' + label.inputLabelEventName + '</td><td class="ixedit-inputarea-sendeventname ixedit-inputarea-xlarge">', options.eventHandlers, '</td><td>&nbsp;</td></tr></table>']];
  newCmd.help = label.commandHelpTrigger;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = this.name + '(' + '\'' + attributeArray[0] + '\'' + ')';
    return commandString;
  };
  cmds.trigger = newCmd;



  // Execute jQuery
  lang.en.cmdSNExecutejQuery = 'Execute jQuery';
  lang.zh.cmdSNExecutejQuery = '执行 jQuery';
  lang.ja.cmdSNExecutejQuery = 'jQuery 実行';
  lang.en.commandHelpExecutejQuery = '<h2>About Execute jQuery Command</h2><p>Execute jQuery command will let you write a jQuery script. Using this command, you can add some advanced programming which cannot be made by IxEdit\'s built-in commands to the page.</p><h3>Caution</h3><p>If you got a syntac error caused by somthing like typos, IxEdit may not be able to be booted. In that case, please turn the \"inactivatingAll\" flag up by adding following line to the HTML file right after the line loading ixedit.js.</p><p>&lt;script type=&quot;text/javascript&quot;&gt;ixedit.inactivatingAll=true&lt;/script&gt;</p><p>This might help IxEdit boot and you to modify your script.</p>';
  lang.zh.commandHelpExecutejQuery = '<h2>About Execute jQuery Command</h2><p>Execute jQuery command will let you write a jQuery script. Using this command, you can add some advanced programming which cannot be made by IxEdit\'s built-in commands to the page.</p><h3>Caution</h3><p>If you got a syntac error caused by somthing like typos, IxEdit may not be able to be booted. In that case, please turn the \"inactivatingAll\" flag up by adding following line to the HTML file right after the line loading ixedit.js.</p><p>&lt;script type=&quot;text/javascript&quot;&gt;ixedit.inactivatingAll=true&lt;/script&gt;</p><p>This might help IxEdit boot and you to modify your script.</p>';
  lang.ja.commandHelpExecutejQuery = '<h2>jQuery 実行コマンドについて</h2><p>jQuery 実行コマンドを使えば、自分で jQuery スクリプトを書いて、IxEdit のコマンドだけでは作成できないようなプログラミングをページに追加することができます。</p><h3>注意</h3><p>もしタイプミスなどが原因で構文エラーとなった場合、IxEdit が起動しなくなる恐れがあります。そのような場合には、\"inactivatingAll\" フラグを立てます。HTML 内の ixedit.js を読み込んでいる行の後に下記の記述を加えます。</p><p>&lt;script type=&quot;text/javascript&quot;&gt;ixedit.inactivatingAll=true&lt;/script&gt;</p><p>これによって IxEdit が起動し、スクリプトを修正することができます。</p>';
  var newCmd = new cmd;
  newCmd.name = 'executeJQuery';
  newCmd.screenName = label.cmdSNExecutejQuery;
  newCmd.category = ixedit.cmdCat[21];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-executejqueryselector ixedit-labelarea-default">' + '$' + '</td><td class="ixedit-inputarea-executefunctionpar ixedit-inputarea-xxsmall" style="text-align: right">(</td><td class="ixedit-inputarea-executejqueryselector">', '', '</td><td class="ixedit-inputarea-executefunctionpar ixedit-inputarea-xxsmall"  style="text-align: left">)</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-executejqueryfunctionname ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-executefunctionpar ixedit-inputarea-xxsmall" style="text-align: right">.</td><td class="ixedit-inputarea-executejqueryfunctionname ixedit-inputarea-medium">', '', '</td><td>&nbsp;</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-executejqueryargument ixedit-labelarea-default">' + '&nbsp;' + '</td><td class="ixedit-inputarea-executefunctionpar ixedit-inputarea-xxsmall" style="text-align: right">(</td><td class="ixedit-inputarea-executejqueryargument">', '', '</td><td class="ixedit-inputarea-executefunctionpar ixedit-inputarea-xxsmall"  style="text-align: left">)</td></tr></table>']];
  newCmd.help = label.commandHelpExecutejQuery;
  newCmd.dontNeedTarget = true;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = 'jQuery(' + attributeArray[0] + ').' + attributeArray[1] + '(' + attributeArray[2] + ')';
    return commandString;
  };
  if(ixedit.advancedMode){ // This command is for only advanced mode.
    cmds.executeJQuery = newCmd;
  };




  // Execute Function
  lang.en.cmdSNExecuteFunction = 'Execute Function';
  lang.zh.cmdSNExecuteFunction = '执行函数';
  lang.ja.cmdSNExecuteFunction = 'ファンクション実行';
  lang.en.commandHelpExecuteFunction = '<h2>About Execute Function Command</h2><p>Execute Function command will let you specifiy an existing function and it\'s argument to be executed. Using this command, you can add some advanced programming which cannot be made by IxEdit\'s built-in commands to the page.</p><h3>Caution</h3><p>If you got a syntac error caused by somthing like typos, IxEdit may not be able to be booted. In that case, please turn the \"inactivatingAll\" flag up by adding following line to the HTML file right after the line loading ixedit.js.</p><p>&lt;script type=&quot;text/javascript&quot;&gt;ixedit.inactivatingAll=true&lt;/script&gt;</p><p>This might help IxEdit boot and you to modify your script.</p>';
  lang.zh.commandHelpExecuteFunction = '<h2>About Execute Function Command</h2><p>Execute Function command will let you specifiy an existing function and it\'s argument to be executed. Using this command, you can add some advanced programming which cannot be made by IxEdit\'s built-in commands to the page.</p><h3>Caution</h3><p>If you got a syntac error caused by somthing like typos, IxEdit may not be able to be booted. In that case, please turn the \"inactivatingAll\" flag up by adding following line to the HTML file right after the line loading ixedit.js.</p><p>&lt;script type=&quot;text/javascript&quot;&gt;ixedit.inactivatingAll=true&lt;/script&gt;</p><p>This might help IxEdit boot and you to modify your script.</p>';
  lang.ja.commandHelpExecuteFunction = '<h2>jQuery 実行コマンドについて</h2><p>ファンクション実行コマンドを使えば、既存の関数とその引数を指定して、IxEdit のコマンドだけでは作成できないようなプログラミングをページに追加することができます。</p><h3>注意</h3><p>もしタイプミスなどが原因で構文エラーとなった場合、IxEdit が起動しなくなる恐れがあります。そのような場合には、\"inactivatingAll\" フラグを立てます。HTML 内の ixedit.js を読み込んでいる行の後に下記の記述を加えます。</p><p>&lt;script type=&quot;text/javascript&quot;&gt;ixedit.inactivatingAll=true&lt;/script&gt;</p><p>これによって IxEdit が起動し、スクリプトを修正することができます。</p>';
  var newCmd = new cmd;
  newCmd.name = 'executeFunction';
  newCmd.screenName = label.cmdSNExecuteFunction;
  newCmd.category = ixedit.cmdCat[21];
  newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-executefunctionname ixedit-labelarea-default">' + label.inputLabelFunction + '</td><td class="ixedit-inputarea-executefunctionname">', '', '</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-executefunctionattr ixedit-labelarea-default">' + label.inputLabelArgument + '</td><td class="ixedit-inputarea-executefunctionpar ixedit-inputarea-xxsmall" style="text-align: right">(</td><td class="ixedit-inputarea-executefunctionattr">', '', '</td><td class="ixedit-inputarea-executefunctionpar ixedit-inputarea-xxsmall"  style="text-align: left">)</td></tr></table>']];
  newCmd.help = label.commandHelpExecuteFunction;
  newCmd.dontNeedTarget = true;
  newCmd.func = function(attributeArray, attributeSubArray){
    var commandString = attributeArray[0] + '(' + attributeArray[1] + ')';
    return commandString;
  };
  if(ixedit.advancedMode){ // This command is for only advanced mode.
    cmds.executeFunction = newCmd;
  };




};




// Making preset CONDCMD instances

ixedit.preAssignCondCmds = function(){
  var lang = ixedit.lang;
  var condcmd = ixedit.condcmd;
  var condcmds = ixedit.condcmds;
  var options = ixedit.selectOptions;
  var label = ixedit.label;

  // Has Class
  lang.en.condCmdSNHasClass = 'Has Class';
  lang.zh.condCmdSNHasClass = '有Class';
  lang.ja.condCmdSNHasClass = 'クラス';
  var newCondCmd = new condcmd();
  newCondCmd.name = 'hasClass';
  newCondCmd.screenName = label.condCmdSNHasClass;
  newCondCmd.attrs = [['<table><tr><td class="ixedit-labelarea-classname ixedit-labelarea-default">' + label.inputLabelClassName + '</td><td class="ixedit-inputarea-classname">', '', '</td></tr></table>']];

  newCondCmd.funcStr = function(target, attributeArray, equation){
    var conditionString = target + '.hasClass(\'' + attributeArray[0] + '\') ' + equation + 'true';
    return conditionString;
  };
  condcmds.hasClass = newCondCmd;


  // Value
  lang.en.condCmdSNAttr = 'Value';
  lang.zh.condCmdSNAttr = '有值';
  lang.ja.condCmdSNAttr = '値';
  var newCondCmd = new condcmd();
  newCondCmd.name = 'val';
  newCondCmd.screenName = label.condCmdSNAttr;
  newCondCmd.attrs = [['<table><tr><td class="ixedit-labelarea-attributename ixedit-labelarea-default">' + label.inputLabelValue + '</td><td class="ixedit-inputarea-valuevalue">', '', '</td></tr></table>']];
  newCondCmd.funcStr = function(target, attributeArray, equation){
    if (target.substr(0,6)=='event.'){
      var conditionString = target + equation + attributeArray[0].toString();
    }
    else{
      var conditionString = target + '.val() ' + equation + ' \'' + attributeArray[0] + '\'';
    }
    return conditionString;
  };
  condcmds.val = newCondCmd;


  // Status
  lang.en.condCmdSNStatus = 'Status';
  lang.zh.condCmdSNStatus = '有状态';
  lang.ja.condCmdSNStatus = '状態';
  var newCondCmd = new condcmd();
  newCondCmd.name = 'status';
  newCondCmd.screenName = label.condCmdSNStatus;
  newCondCmd.attrs = [options.statuses];
  newCondCmd.attrs = [['<table><tr><td class="ixedit-labelarea-statusname ixedit-labelarea-default">' + label.inputLabelStatus + '</td><td class="ixedit-inputarea-statusname ixedit-inputarea-xlarge">', options.statuses, '</td><td>&nbsp;</td></tr></table>']];
  newCondCmd.funcStr = function(target, attributeArray, equation){
    var conditionString = target + '.is(\'' + ':' + attributeArray[0] + '\') ' + equation + ' true';
    return conditionString;
  };
  condcmds.status = newCondCmd;

};


// ----------


// Pre-generate event list.
ixedit.preGenerateEvtList = function(){
  var htmlString = [];
  var thisSelectOptionsEventHandlersLength = this.selectOptions.eventHandlers.length;
  for(var h=0; h<thisSelectOptionsEventHandlersLength; h++){ // Loop for the length of eventHandlers.
    htmlString[htmlString.length] = '<option value="' + this.selectOptions.eventHandlers[h][1] + '">' + this.selectOptions.eventHandlers[h][0] + '</option>';
  };
  ixedit.evtMenuSource = htmlString.join('');
};

// Pre- generate command list.
ixedit.preGenerateCmdList = function(){
  // Generate command list.
  var htmlString = [];
  for(var j in this.cmdCat){
    var htmlStringOptions = new Array();
    for (var x in this.cmds) {
      if(this.cmds[x].category==this.cmdCat[j]){
        htmlStringOptions[htmlStringOptions.length] = '<option class="ixedit-command-' + x + '" value="' + this.cmds[x].name + '">' + this.cmds[x].screenName + '</option>';
      };
    };
    var htmlStringOptionsString = htmlStringOptions.join('');
    if(htmlStringOptionsString.length>0){ // If the command has an item.
      htmlString[htmlString.length] = '<optgroup label="' + this.label['cmdCat'+j] + '">' + htmlStringOptionsString + '</optgroup>';
    };
  };
  ixedit.cmdMenuSource = htmlString.join('');
};

// Pre-generating condition command list.
ixedit.preGenerateCondCmdList = function(){
  var htmlString = [];
  for (var x in this.condcmds) {
    htmlString[htmlString.length] = '<option class="ixedit-command-' + x + '" value="' + this.condcmds[x].name + '">' + this.condcmds[x].screenName + '</option>';
  };
  ixedit.condCmdMenuSource = htmlString.join('');
};



// Make ix array (ixs) by using the array from JSON.
ixedit.jsonToIxs = function(theArray){
  var theArrayLength = theArray.length;
  for(var ixAttsCnt=0; ixAttsCnt<theArrayLength; ixAttsCnt++){
    var newIxs = new this.ix(); // Generate ix instance.
    newIxs.active = theArray[ixAttsCnt].active;
    newIxs.name = theArray[ixAttsCnt].name;
    newIxs.trigger = theArray[ixAttsCnt].trigger;
    newIxs.event = theArray[ixAttsCnt].event;
    newIxs.preventDefault = theArray[ixAttsCnt].preventDefault;
    newIxs.stopBubbling = theArray[ixAttsCnt].stopBubbling;
    newIxs.comment = theArray[ixAttsCnt].comment;
    newIxs.conditions = theArray[ixAttsCnt].conditions;
    newIxs.actions = theArray[ixAttsCnt].actions;
    this.ixs.add(newIxs); // Add to ixs array.
  }
};





// Load Ix JSON from string.
ixedit.loadIxJSONString = function(theString){
  if(theString !== ''){ // If there is JSON text of loaded data.
    var loadedObject = JSON.parse(theString);

    if(loadedObject.format == this.format){ // If the data format matches.
      var ixAtts = loadedObject.data; // Decode the JSON data and put it into the array temporarily
      if(ixAtts){
        this.jsonToIxs(ixAtts); // Put the array contents into ixs array.
      };
      return true;
    } else { // If format is wrong.
      window.alert('IxEdit: The data you are loading is not compatible with this version of IxEdit. Please upgrade.');
      return false;
    };
  } else {
    // Do nothing.

  };

};



// Retrieve instance from array of instances ( name property is required ).
ixedit.findInstance = function(instanceArray, instanceName){
  var instanceArrayLength = instanceArray.length;
  for(var instanceCnt=0; instanceCnt<instanceArrayLength; instanceCnt++){
    if(instanceArray[instanceCnt].name == instanceName){
      var theInstance = instanceArray[instanceCnt];
      break;
    };
  };
  return theInstance;
};



//ダブルクリック時のテキスト選択を解除（ページ全体が解除対象）
// Avoid text selecting when double-clicking ( for entire page ).
ixedit.clearSelection = function(){
  // For IE
  if(document.selection && document.selection.empty){
    document.selection.empty() ;
  // For other modern browsers
  } else if(window.getSelection) {
    var sel = window.getSelection();
    //sel.collapse(true); // Doesn't work on Firefox...
    sel.removeAllRanges();
  }
};


ixedit.fixPositionPrefs = function(){
  var windowWidth = jQuery(window).width();
  var windowHeight = jQuery(window).height();

  if(ixedit.commonPrefs.inspectorLeft && ixedit.commonPrefs.inspectorTop){
    // Fix position prefs if unusual. Main dialog must be inside the window viewport.
    if(ixedit.commonPrefs.inspectorTop < 0){
      ixedit.commonPrefs.inspectorTop = 0;
    };
    if(ixedit.commonPrefs.inspectorTop > windowHeight){
      ixedit.commonPrefs.inspectorTop = windowHeight - 50;
    };
    if(ixedit.commonPrefs.inspectorLeft < 0){
      ixedit.commonPrefs.inspectorLeft = 0;
    };
    if(ixedit.commonPrefs.inspectorLeft > windowWidth){
      ixedit.commonPrefs.inspectorLeft = windowWidth - 50;
    };
  };
  // Fix Window-Offset prefs if unusual. Window-offset must be smaller than window size.
  if(ixedit.commonPrefs.inspectorWindowOffsetX && ixedit.commonPrefs.inspectorWindowOffsetY){
    if(ixedit.commonPrefs.inspectorWindowOffsetX < 0){
      ixedit.commonPrefs.inspectorWindowOffsetX = 0;
    };
    if(ixedit.commonPrefs.inspectorWindowOffsetY < 0){
      ixedit.commonPrefs.inspectorWindowOffsetY = 0;
    };
    if(ixedit.commonPrefs.inspectorWindowOffsetX > windowWidth){
      ixedit.commonPrefs.inspectorWindowOffsetX  =  windowWidth - 50;
    };
    if(ixedit.commonPrefs.inspectorWindowOffsetY > windowHeight){
      ixedit.commonPrefs.inspectorWindowOffsetY  =  windowHeight - 50;
    };
  };
};


ixedit.updatePositionPrefs = function(){
  var dialogPosition = jQuery('#ixedit-dialog-main').position();
  var scrollTop = jQuery(window).scrollTop();
  var scrollLeft = jQuery(window).scrollLeft();

  ixedit.commonPrefs.inspectorTop = dialogPosition.top;
  if(ixedit.commonPrefs.inspectorShaded == false){ // If not shaded.
    ixedit.commonPrefs.inspectorLeft = dialogPosition.left; // Put current left position to commonPrefs.
    ixedit.commonPrefs.inspectorWindowOffsetX = dialogPosition.left - scrollLeft;
  } else { // If shaded.
    ixedit.commonPrefs.inspectorLeft = dialogPosition.left - 215; // Put left position of opened state to commonPrefs.
    ixedit.commonPrefs.inspectorWindowOffsetX = dialogPosition.left - scrollLeft - 215;
  };

  ixedit.commonPrefs.inspectorWindowOffsetY = dialogPosition.top - scrollTop;
};


ixedit.positDialogMain = function(){
  ixedit.fixPositionPrefs();
  var scrollLeft = jQuery(window).scrollLeft();
  var scrollTop = jQuery(window).scrollTop();
  if(ixedit.commonPrefs.inspectorWindowOffsetX && ixedit.commonPrefs.inspectorWindowOffsetY){ // Very first time to boot IxEdit, those offset prefs are not defined
    if(ixedit.commonPrefs.inspectorShaded == false){ // If not shaded.
      jQuery('#ixedit-dialog-main').css('left', ixedit.commonPrefs.inspectorWindowOffsetX + scrollLeft).css('top', ixedit.commonPrefs.inspectorWindowOffsetY + scrollTop);
    } else { // If shaded.
      jQuery('#ixedit-dialog-main').css('left', ixedit.commonPrefs.inspectorWindowOffsetX + scrollLeft + 215).css('top', ixedit.commonPrefs.inspectorWindowOffsetY + scrollTop);
    };
  };
  ixedit.prevScrollLeft = scrollLeft;
  ixedit.prevScrollTop = scrollTop;
};



// Retrieve line number in the list by looking at the is instance number.
ixedit.getListItemNo = function(ixNo){
  var listItems = this.listItems;
  for(var i=0; i<listItems.length; i++){
    if(this.listItems[i].no == ixNo){
      var theItemNo = i;
      break;
    };
  };
  return theItemNo;
};



// Action for clicking an item in the interaction list.
ixedit.showSelectedItem = function(){
  this.clearSelection(); // Avoid text selecting.
  jQuery('.ixedit-table-item').removeClass('selected'); // Clear highlighing.
  var selectedLineNos = this.prefs.selectedLineNo;
  var selectedLineNosLength = selectedLineNos.length;
  for(var i=0; i<selectedLineNosLength; i++){
    jQuery('#ixedit-table-item-' + selectedLineNos[i]).addClass('selected'); // Highlight the new one.
  };
  
  // Retrieve the ix instance number to show
  if(selectedLineNosLength>0){
    var targetIxNo = this.listItems[selectedLineNos[selectedLineNosLength-1]].no;
  } else {
    return;
  };
  var targetIx = this.ixs[targetIxNo];

  var theEditButton = jQuery('#ixedit-button-edit');

  if(selectedLineNosLength ==1 && targetIx.active){
    theEditButton.removeAttr('disabled').removeClass('disabled'); // Enable the edit button then remove class
  } else {
    theEditButton.attr('disabled', 'disabled').addClass('disabled'); // Disable the edit button then add class
  };

};

// Retrieve the screen name of the option from the option array.
ixedit.findOptionScreenName = function(optionArray, optionName){
  var optionArrayLength = optionArray.length;
  for(var i=0; i<optionArrayLength; i++){
    if(optionArray[i][1]==optionName){
      var theOptionScreenName = optionArray[i][0];
      break;
    };
  };
  return theOptionScreenName;
};



// Prepare list.
ixedit.prepareList = function(){

  this.listItems = new Array(); // Initialize ixedit.listItems array.
  var array = this.ixs;

  // Make ixedit.listItems array.
  // This is a collection of items to be shown in the ix list from each ix instance.
  var arrayLength = array.length;
  for(var i=0; i<arrayLength; i++){ // Loop for the length of ixs.
    var newItem = new this.listItem();

    var theEvent = array[i].event; // ix.event
    var theTrigger = array[i].trigger; // ix.trigger

    newItem.no = i; // ix number
    if(theEvent=='load' || theEvent=='unload'){ // If the event is load or unload.
      newItem.trigger = ' - '; // Give '-'.
    } else { // Other events.
      newItem.trigger = theTrigger; // load from the data.
    };
    newItem.event = this.findOptionScreenName(this.selectOptions.eventHandlers, theEvent); // Retrieve screen name of event.

    var theAction = array[i].actions; // ix.actions
    var actionLength = theAction.length;
    var actionTargets = new Array;
    var actionCommands = new Array;
    for(var actionNo=0; actionNo<actionLength; actionNo++){ // Loop for the length of actions.
      if(ixedit.cmds[theAction[actionNo].command]){ // If the command is supported.
        // Get target.
        if(theAction[actionNo].target==''){
          actionTargets[actionNo]=' - ';
        }else{
          actionTargets[actionNo]=theAction[actionNo].target;
        };
        // Specify the command name.
        actionCommands[actionNo]=ixedit.cmds[theAction[actionNo].command].screenName;
      }else{ // If the command is NOT supported
        actionTargets[actionNo]='_'; // target will be '_'.
        actionCommands[actionNo]='_'; // Command will be '_'.
      };

    };
    newItem.targets = actionTargets.join(', ');
    newItem.commands = actionCommands.join(', ');

    newItem.comment = array[i].comment; // Comment

    var theActive = array[i].active; // Active or not
    if(theActive){
      newItem.check = 0; // For sorting, use 0 or 1 instead of True of False.
    } else {
      newItem.check = 1;
    };

    this.listItems[this.listItems.length] = newItem; // Add this instance to ixedit.listItems array.

  };

  // Sort by sortkey
  if(ixedit.prefs.sortKey){
    var theSortKey = ixedit.prefs.sortKey;
  } else {
    var theSortKey = 'trigger';
  };

  this.listItems.sort ( function (b1, b2) { return b1[theSortKey] > b2[theSortKey] ? 1 : -1; } );

};



// Refresh ix list.
ixedit.refreshList = function(isAll){


  if(isAll){ // isAll means whole list is to be refreshed.
    var ixeditTableHeader = jQuery('.ixedit-table-header');
    ixeditTableHeader.empty(); // Empty table header.
    var headerSource = '<tr class="ixedit-columnheader"><th class="ixedit-column-check">' + this.label.listHeaderCheck + '</th><th class="ixedit-column-event">' + this.label.listHeaderEvent + '</th><th class="ixedit-column-trigger">' + this.label.listHeaderTrigger + '</th><th class="ixedit-column-targets">' + this.label.listHeaderTarget + '</th><th class="ixedit-column-commands">' + this.label.listHeaderCommand + '</th><th class="ixedit-column-comment">' + this.label.listHeaderComment + '</th><!--th>No</th--></tr>';
    ixeditTableHeader.html(headerSource);

    // Bind sort function to column headers.
    function listSort(sortKey){
      ixedit.prefs.sortKey = sortKey;
      var listItems = ixedit.listItems;
      var currentIxNos = new Array();
      if(listItems.length>0){
        var selectedLinesNos = ixedit.prefs.selectedLineNo;
        var selectedLinesNosLength = selectedLinesNos.length;
        for(var i=0; i<selectedLinesNosLength; i++){
          currentIxNos[currentIxNos.length] = listItems[selectedLinesNos[i]].no; // Retrieve the ix number of selected item.
        };
        ixedit.prepareList(); // Prepare sorting.
        for(var j=0; j<selectedLinesNosLength; j++){
          selectedLinesNos[j] = ixedit.getListItemNo(currentIxNos[j]); // Define new selected line numbers.
        };
      } else {
        ixedit.prefs.selectedLineNo = [];
        currentIxNos[0] = undefined;
      };
      ixedit.refreshList(); // Refresn list.
      ixedit.refreshListButtonStates();
      ixedit.showSelectedItem();

    };
    jQuery('th.ixedit-column-check').click(function(){
      listSort('check');
    }).mousedown(function(){
      jQuery('th.ixedit-column-' + 'check').addClass('selected'); // Color on column header.
    });
    jQuery('th.ixedit-column-event').click(function(){
      listSort('event');
    }).mousedown(function(){
      jQuery('th.ixedit-column-' + 'event').addClass('selected'); // Color on column header.
    });
    jQuery('th.ixedit-column-trigger').click(function(){
      listSort('trigger');
    }).mousedown(function(){
      jQuery('th.ixedit-column-' + 'trigger').addClass('selected'); // Color on column header.
    });
    jQuery('th.ixedit-column-targets').click(function(){
      listSort('targets');
    }).mousedown(function(){
      jQuery('th.ixedit-column-' + 'targets').addClass('selected'); // Color on column header.
    });
    jQuery('th.ixedit-column-commands').click(function(){
      listSort('commands');
    }).mousedown(function(){
      jQuery('th.ixedit-column-' + 'commands').addClass('selected'); // Color on column header.
    });
    jQuery('th.ixedit-column-comment').click(function(){
      listSort('comment');
    }).mousedown(function(){
      jQuery('th.ixedit-column-' + 'comment').addClass('selected'); // Color on column header.
    });
  };

  jQuery('th', ixeditTableHeader).removeClass('selected'); // Color on column header.
  jQuery('th.ixedit-column-' + this.prefs.sortKey).addClass('selected'); // Color on column header.

  var ixeditTableBody = jQuery('.ixedit-table-body');
  ixeditTableBody.empty(); // Empty table body.

  var array = this.ixs;

  var itemSource = new Array();
  var thisListItemsLength = this.listItems.length;
  for(var tmpArryCnt=0; tmpArryCnt<thisListItemsLength; tmpArryCnt++){
    var activation = this.listItems[tmpArryCnt].check;
    if(activation==1){
      var inactivator = ' inactive';
      var checkHTML = '<input type="checkbox" onclick="ixedit.ixs.activate(jQuery(this).is(\':checked\'),' + tmpArryCnt + ')" />';
    } else {
      var inactivator = '';
      var checkHTML = '<input type="checkbox" checked="checked" onclick="ixedit.ixs.activate(jQuery(this).is(\':checked\'),' + tmpArryCnt + ')" />';
    };
    itemSource[itemSource.length] = '<tr class="ixedit-table-item' + inactivator + '" id="ixedit-table-item-' + tmpArryCnt + '" onselectstart="return false;">';

    itemSource[itemSource.length] = '<td class="ixedit-column-check">' + checkHTML + '</td>';
    var theString = this.listItems[tmpArryCnt].event;
    itemSource[itemSource.length] = '<td class="ixedit-column-event" title="' + theString + '">' + theString + '</td>';
    var theString = this.listItems[tmpArryCnt].trigger;
    itemSource[itemSource.length] = '<td class="ixedit-column-trigger" title="' + theString + '">' + theString + '</td>';
    var theString = this.listItems[tmpArryCnt].targets;
    itemSource[itemSource.length] = '<td class="ixedit-column-targets" title="' + theString + '">' + theString + '</td>';
    var theString = this.listItems[tmpArryCnt].commands;
    itemSource[itemSource.length] = '<td class="ixedit-column-commands" title="' + theString + '">' + theString + '</td>';
    var theString = this.listItems[tmpArryCnt].comment;
    itemSource[itemSource.length] = '<td class="ixedit-column-comment" title="' + theString + '">' + theString + '</td>';
    itemSource[itemSource.length] = '</tr>';
  };


  ixeditTableBody.html(itemSource.join(''));


  // Binding
  jQuery('.ixedit-table-item').mousedown(function(e) {
    var theIndex = this.rowIndex; // Clicked row index.
    var selectedLineNos = ixedit.prefs.selectedLineNo;

    function unselectItem(theIndex){ // Unselect.
      var selectedLineNosLength = selectedLineNos.length;
      for(var i=0; i<selectedLineNosLength; i++){
        if(selectedLineNos[i] == theIndex){
          selectedLineNos.splice(i,1);
          break;
        };
      }
    };

    if(e.metaKey) {
      if(jQuery(this).hasClass('selected')){
        unselectItem(theIndex);
      } else {
        selectedLineNos[selectedLineNos.length] = theIndex;
      };
    } else if(e.ctrlKey) {
      if(jQuery(this).hasClass('selected')){
        unselectItem(theIndex);
      } else {
        selectedLineNos[selectedLineNos.length] = theIndex;
      };
    } else if(e.shiftKey) {

      if(selectedLineNos.length>0){ // If there is a selected row already.
        selectedLineNos.ixeditSortByNumber(); // Sort array.
        var youngestItemNo = selectedLineNos[0]; // Retrieve youngest selected row index.
        var oldestItemNo = selectedLineNos[selectedLineNos.length-1]; // Retrive oldest selected row index.
        var tableItemLength = jQuery('.ixedit-table-item').length; // Retrieve number of lines.
        jQuery('.ixedit-table-item').removeClass('selected'); // Clear all selection.
        selectedLineNos.length = 0; // Initialize selectedLineNos
        if(theIndex >= youngestItemNo){ // If clicked row is not youngest.
          for(var i=youngestItemNo; i<=theIndex; i++){ // Loop from youngest to theIndex.
            if(i<tableItemLength){
              jQuery('.ixedit-table-item:eq(' + i + ')').addClass('selected');
              selectedLineNos[selectedLineNos.length] = i;
            };
          };
        } else { // If clicked row is youngest.
          for(var i=theIndex; i<=oldestItemNo; i++){ // Loop from theIndex to oldest.
            if(i<tableItemLength){
              jQuery('.ixedit-table-item:eq(' + i + ')').addClass('selected');
              selectedLineNos[selectedLineNos.length] = i;
            };
          };
        };
      };

    } else { // default
      selectedLineNos.length = 1; // Make ixedit.prefs.selectedLineNo as 1.
      selectedLineNos[0] = theIndex;
    };

    ixedit.updateListStatus();

    ixedit.refreshListButtonStates();
    ixedit.showSelectedItem();



  });

  // Specify column widths
  jQuery('.ixedit-column-check').width(this.commonPrefs.inspectorColumnCheckWidth);
  jQuery('.ixedit-column-event').width(this.commonPrefs.inspectorColumnEventWidth);
  jQuery('.ixedit-column-trigger').width(this.commonPrefs.inspectorColumnTriggerWidth);
  jQuery('.ixedit-column-targets').width(this.commonPrefs.inspectorColumnTargetsWidth);
  jQuery('.ixedit-column-commands').width(this.commonPrefs.inspectorColumnCommandsWidth);
  // jQuery('.ixedit-column-comment').width(this.commonPrefs.inspectorColumnCommentWidth);


  jQuery('tr:odd', ixeditTableBody).addClass('ixedit-odd'); // Make stripe.


  // Set double-click event handler.
  jQuery('.ixedit-table-item').dblclick(function(){
    var editButton = jQuery('#ixedit-button-edit');
    if(editButton.is(':enabled')){
      jQuery('#ixedit-button-edit').trigger('click');
    };
  });

  ixedit.updateListStatus();

};


ixedit.refreshListButtonStates = function(){
  // Disableall
  jQuery('#ixedit-button-delete').attr('disabled', 'disabled').addClass('disabled');
  jQuery('#ixedit-button-duplicate').attr('disabled', 'disabled').addClass('disabled');
  jQuery('#ixedit-button-edit').attr('disabled', 'disabled').addClass('disabled');

  if(this.ixs.length < 1){ // if there's no ix instance
    //do nothing
  } else {
    var selectedLineNo = ixedit.prefs.selectedLineNo;
    if(selectedLineNo.length < 1){ // if no line highlighted
      // do nothing
    }else if(selectedLineNo.length == 1){ // if one line highlighted
      jQuery('#ixedit-button-delete').removeAttr('disabled').removeClass('disabled');
      jQuery('#ixedit-button-duplicate').removeAttr('disabled').removeClass('disabled');
      jQuery('#ixedit-button-edit').removeAttr('disabled').removeClass('disabled');
    }else if(selectedLineNo.length > 1){ // if multiple lines highlighted
      jQuery('#ixedit-button-delete').removeAttr('disabled').removeClass('disabled');
      jQuery('#ixedit-button-duplicate').removeAttr('disabled').removeClass('disabled');
    };

  };

};

// Update list status.
ixedit.updateListStatus = function(){
  var itemNo = ixedit.ixs.length; // number of items
  var selectedNo = ixedit.prefs.selectedLineNo.length; // number of selected

  if(itemNo>1){
    jQuery('#ixedit-utilitynoofitems').text(itemNo + ' ' + ixedit.label.listStatusItems);
  }else{
    jQuery('#ixedit-utilitynoofitems').text(itemNo + ' ' + ixedit.label.listStatusItem);
  };

  jQuery('#ixedit-utilitynoofselected').text(selectedNo + ' ' + ixedit.label.listStatusSelected);
};






// Show list view.
ixedit.showIxlist = function(){

  jQuery('#ixedit-inputbox').hide();

  jQuery('#ixedit-button-new').show();
  jQuery('#ixedit-button-duplicate').show();
  jQuery('#ixedit-button-delete').show();
  jQuery('#ixedit-button-reload').show();
  jQuery('#ixedit-button-edit').show();
  jQuery('#ixedit-utility').show();
  jQuery('#ixedit-button-cancel').hide();
  jQuery('#ixedit-button-reset').hide();
  jQuery('#ixedit-button-doneandreload').hide();
  jQuery('#ixedit-button-done').hide();


  jQuery('#ixlist').show();


  jQuery('#ixedit-ui').removeClass('ixedit-input');
  // Set the size of container the list table goes into.
  ixedit.resizeTableHeight();
  ixedit.resizeTableWidth();

  var ixeditListBody = jQuery('#ixedit-listbody');
  var theContentHeight = ixeditListBody.height();

  var ixeditTableBody = jQuery('.ixedit-table-body');
  var trSelected = jQuery('tr.selected', ixeditTableBody);
  if(trSelected.length > 0){ // If there is highlighted line.
    var theSelectedItemPosition = jQuery(trSelected[0]).position(); // If multiply highlighted, the first one.
    var theSelectedItemTop = theSelectedItemPosition.top;
    // Safari cant get theSelectedItemTop correctly. Bug?
  } else {
    var theSelectedItemTop = 0;
  };
  if(theSelectedItemTop > theContentHeight-10){ // 10 is appropriate allowance
    ixeditListBody.scrollTop(theSelectedItemTop-50); // 50 is appropriate allowance
  } else { // if not hidden.
    ixeditListBody.scrollTop(this.prefs.inspectorScrollTop);
  };



};


// Show edit view.
ixedit.showIxinputbox = function(){
  // Get scroll position and save it into prefs.
  this.prefs.inspectorScrollTop = jQuery('#ixedit-listbody').scrollTop();
  jQuery('#ixlist').hide();

  jQuery('#ixedit-utility').hide();
  jQuery('#ixedit-button-new').hide();
  jQuery('#ixedit-button-duplicate').hide();
  jQuery('#ixedit-button-delete').hide();
  jQuery('#ixedit-button-reload').hide();
  jQuery('#ixedit-button-edit').hide();
  if(ixedit.addingNewIx){ // If a new ix is creating now.
    jQuery('#ixedit-button-cancel').show();
    jQuery('#ixedit-button-reset').hide();
  } else { // else
    jQuery('#ixedit-button-cancel').hide();
    jQuery('#ixedit-button-reset').show();
  };
  jQuery('#ixedit-button-doneandreload').show();
  jQuery('#ixedit-button-done').show();

  if(ixedit.gimmickAnimation){
    jQuery('#ixedit-inputbox').fadeIn('fast');
  }else{
    jQuery('#ixedit-inputbox').show();
  };

  // Adjust hight of comment area.
  this.resizeCommentHeight();

  // Set overflow of .ui-dialog-content as auto.
  jQuery('#ixedit-ui').addClass('ixedit-input');

};

// Resize table width.
ixedit.resizeTableWidth = function(){
  jQuery('.ixedit-table').width(jQuery('#ixlist').width()-16); // 16 is the width of scrollbar.
};

// Resize table height.
ixedit.resizeTableHeight = function(){
  jQuery('#ixedit-listbody').height(jQuery('#ixedit-ui').height()-40);
  // -40 is the height of div#utility plus table.ixedit-table-header.
};

// Get new comment height
ixedit.getNewCommentHeight = function(gap){
  // Calculate hight of new comment area.
  // Argument gap is the gap of current height and new height.
  var dialog = jQuery('#ixedit-dialog-main');
  var titleBarHeight = jQuery('.ui-dialog-titlebar', dialog).outerHeight(); // Height of the titlebar
  var commentTitle = jQuery('#ixedit-commenttitle');
  if(gap){ // If the position of comment wrapper top is specified.
    var commentTitleBottomY = commentTitle.position().top + commentTitle.outerHeight()-gap; // Top of comment wrapper top.
  }else{ // If not specified, calcurate by using current value.
    var commentTitleBottomY = commentTitle.position().top + commentTitle.outerHeight(); // Top of comment wrapper top.
    // The reason why not using value of comment wrapper top directly, the value cant be taken when the comment wrapper is hidden.
    // So use the value of bottom of comment titlebar.
  };
  var newCommentBoxHeight = jQuery('#ixedit-ui').height() + titleBarHeight - commentTitleBottomY - 36 - 3;
  // 36 is coming from; padding of comment box 3px x 2, textarea margin 12px x 2, textarea border 1px x 2, textarea padding 2px x 2. You may need one more pixel for IE bug.
  if(newCommentBoxHeight < 80){
    newCommentBoxHeight = 80;
  };
  return newCommentBoxHeight;
};

// Resize comment height.
ixedit.resizeCommentHeight = function(){
  // Adjust hight of comment field.
  // Use this function after opening/closing the area to fix little margin of error.
  var newCommentBoxHeight = ixedit.getNewCommentHeight();
  jQuery('#ixedit-comment').height(newCommentBoxHeight);

};

// Animate comment height.
ixedit.animateCommentHeight = function(newHeight, duration){
  var commentBox = jQuery('#ixedit-comment');
  if(commentBox.is(':visible')){
    var param = newHeight + 'px';
    if(ixedit.gimmickAnimation){
      commentBox.animate({'height':param},duration,'linear',function(){
      });
    }else{
      commentBox.height(param);
    };
  }

};

// Area gimmick
ixedit.areaGimmick = function(areaNum, ixeditUi, theWrapper, theContainer){
  var theComment = jQuery('#ixedit-comment');
  if(theWrapper.hasClass('ixedit-hidden')===false){ // If closing the area.
    theWrapper.addClass('ixedit-hidden');
    var containerOuterHeight = theContainer.outerHeight();
    var containerInnerHeight = theContainer.innerHeight();
    var containerHeight = theContainer.height();
    var newHeight = ixedit.getNewCommentHeight(containerOuterHeight);

    if(ixedit.gimmickAnimation){
      theContainer.animate({'height':'0px'},250,'linear',function(){
        // Callback
        theContainer.hide(); // Animate doesnt hide. So do it here.
        theContainer.height(containerHeight); // Make height back in the background.
        ixedit.commonPrefs.areasShown[areaNum] = false;
        //ixedit.updatePrefsData(); // Save DB
        ixedit.resizeCommentHeight();
      });
      ixedit.animateCommentHeight(newHeight, 250);

    }else{
      theContainer.hide();
        ixedit.commonPrefs.areasShown[areaNum] = false;
        //ixedit.updatePrefsData(); // Save DB
        ixedit.resizeCommentHeight();
    };
    //
  } else { // If opening
    if(theComment.height() > 80){ //If scrolled
      ixeditUi.css('overflow','hidden'); // Overflow hidden, to hide scrollbar.
    };
    theWrapper.removeClass('ixedit-hidden');
    var containerOuterHeight = theContainer.outerHeight();
    var containerInnerHeight = theContainer.innerHeight();
    theContainer.height(0); // Make height as 0 in the background.
    var newHeight = theComment.height()-containerOuterHeight;
    if(newHeight<80){
        newHeight = 80;
    };
    if(ixedit.gimmickAnimation){
      theContainer.animate({'height':containerOuterHeight+'px'},250,'linear',function(){
        // Callback
        ixeditUi.css('overflow','auto');
        ixedit.commonPrefs.areasShown[areaNum] = true;
        //ixedit.updatePrefsData(); // Save DB
        theContainer.height(''); // Clear height value to make it flexible when content is dinamically changed.
        ixedit.resizeCommentHeight();
      });
      ixedit.animateCommentHeight(newHeight, 250); // Comment area animation at the same time target area is animated.
    }else{
      theContainer.height(containerOuterHeight+'px');
      ixeditUi.css('overflow','auto');
      ixedit.commonPrefs.areasShown[areaNum] = true;
      //ixedit.updatePrefsData(); // Save DB
      theContainer.height(''); // Clear height value to make it flexible when content is dinamically changed.
      theContainer.show();
      ixedit.resizeCommentHeight();
    };
    
  }
};



// About Dialog
ixedit.showAbout = function(){
  var label = ixedit.label;
  var aboutDialog = jQuery('<div id="ixedit-about-ui" title="' + label.utilityAbout + '"><div class="ixedit-instruction-content">' + '<h2>' + label.appName + '</h2><p>' + label.version + ': ' + ixedit.version + '<br />' + label.copyright + '</p></div>');
    aboutDialog.dialog({
      width: 400,
      modal: true,
      resizable: false,
      dialogClass: 'ixedit-dialog ixedit-dialog-about',
      buttons: {
        "0": function() {
          aboutDialog.dialog("destroy");
          aboutDialog.remove();
        }
      },
      open:
        function(){
          var aboutDialog = jQuery('.ixedit-dialog-about');
          var buttons = jQuery('button:visible', aboutDialog);
          // Button effects.
          buttons.mousedown(function(){jQuery(this).addClass('ixedit-pushed')}).mouseup(function(){jQuery(this).removeClass('ixedit-pushed')}).mouseout(function(){jQuery(this).removeClass('ixedit-pushed')});
          // Label buttons.
          jQuery(buttons[0]).text(label.mainButtonClose);
          jQuery('.ui-widget-overlay').addClass('ixedit-overlay'); // Add class to overlay.
        },
      close:
        function(){
          aboutDialog.dialog('destroy');
          aboutDialog.remove();
        }
    });
};



// Deploy dialog
ixedit.showDeploy = function(){
  var label = ixedit.label;
  var deployDialog = jQuery('<div id="ixedit-deploy-ui" title="' + label.utilityDeploy + '"><div class="ixedit-instruction-content">' + label.instructionDeploy + '<textarea class="ixedit-deployingtext"></textarea><p class="ixedit-undertextareaoption"><span><input type="checkbox" id="ixedit-deployoption-1" onclick="ixedit.checkCommentInclusion(jQuery(this))" /><label for="ixedit-deployoption-1">' + label.inputLabelIncludeComment + '</label></span></p></div>');
    deployDialog.dialog({
      width: 600,
      height: 550,
      minWidth: 600,
      minHeight: 550,
      modal: true,
      resizable: true,
      dialogClass: 'ixedit-dialog ixedit-dialog-deploy',
      buttons: {
        "0": function() {
          deployDialog.dialog("destroy");
          deployDialog.remove();
        }
      },
      open:
        function(){
          ixedit.refreshDeployDialog();
          var deployDialog = jQuery('.ixedit-dialog-deploy');
          var buttons = jQuery('button:visible', deployDialog);
          // Button effects
          buttons.mousedown(function(){jQuery(this).addClass('ixedit-pushed')}).mouseup(function(){jQuery(this).removeClass('ixedit-pushed')}).mouseout(function(){jQuery(this).removeClass('ixedit-pushed')});
          // Label buttons.
          jQuery(buttons[0]).text(label.mainButtonClose);
          jQuery('.ui-widget-overlay').addClass('ixedit-overlay'); // Add class to overlay.

          var textArea = jQuery('textarea.ixedit-deployingtext', deployDialog);
          ixedit.resizeBoxHeightOnDialog(deployDialog, textArea, 75);
        },
      close:
        function(){
          deployDialog.dialog('destroy');
          deployDialog.remove();
        },
      resize:
        function(){
          var deployDialog = jQuery('.ixedit-dialog-deploy');
          var textArea = jQuery('textarea.ixedit-deployingtext', deployDialog);
          ixedit.resizeBoxHeightOnDialog(deployDialog, textArea, 75);
        }
    });
};




// Export dialog
ixedit.showExport = function(){
  var label = ixedit.label;
  var exportDialog = jQuery('<div id="ixedit-export-ui" title="' + ixedit.label.utilityExport + '"><div class="ixedit-instruction-content">' + label.instructionExport + '<textarea class="ixedit-exportingtext"></textarea></div></div>');
    exportDialog.dialog({
      width: 600,
      height: 480,
      minWidth: 600,
      minHeight: 480,
      modal: true,
      resizable: true,
      dialogClass: 'ixedit-dialog ixedit-dialog-export',
      buttons: {
        "0": function() {
          jQuery(this).dialog("destroy");
          exportDialog.remove();
        }
      },
      open:
        function(){
          ixedit.refreshExportDialog();
          var exportDialog = jQuery('.ixedit-dialog-export');
          var buttons = jQuery('button:visible', exportDialog);
          // Button effects
          buttons.mousedown(function(){jQuery(this).addClass('ixedit-pushed')}).mouseup(function(){jQuery(this).removeClass('ixedit-pushed')}).mouseout(function(){jQuery(this).removeClass('ixedit-pushed')});
          // Label buttons.
          jQuery(buttons[0]).text(ixedit.label.mainButtonClose);
          jQuery('.ui-widget-overlay').addClass('ixedit-overlay'); // Add class to overlay.

          var textArea = jQuery('textarea.ixedit-exportingtext', exportDialog);
          ixedit.resizeBoxHeightOnDialog(exportDialog, textArea, 45);
        },
      close:
        function(){
          exportDialog.dialog('destroy');
          exportDialog.remove();
        },
      resize:
        function(){
          var exportDialog = jQuery('.ixedit-dialog-export');
          var textArea = jQuery('textarea.ixedit-exportingtext', exportDialog);
          ixedit.resizeBoxHeightOnDialog(exportDialog, textArea, 45);
        }
    });
};

ixedit.switchImportPanel = function(control, panel0, panel1){
  var importDialog = jQuery('.ixedit-dialog-import');
  switch(control.val()){
    case '0':
      panel0.show();
      panel1.hide();
      var textArea = jQuery('.ixedit-importingtext', importDialog);
      ixedit.resizeBoxHeightOnDialog(importDialog, textArea, 45);
      break;
    default:
      panel0.show();
      panel1.hide();
      break;
  };
};

// Import dialog.
ixedit.showImport = function(){
  var label = ixedit.label;
  var importDialog = jQuery('<div id="ixedit-import-ui" title="' + label.utilityImport + '"><div id="ixedit-import-paste" class="ixedit-instruction-content">' + label.instructionImport + '<textarea class="ixedit-importingtext"></textarea></div></div>');
      importDialog.dialog({
      width: 600,
      height: 480,
      minWidth: 600,
      minHeight: 480,
      modal: true,
      resizable: true,
      dialogClass: 'ixedit-dialog ixedit-dialog-import',
      buttons: {
        "0": function() {
          jQuery(this).dialog("destroy");
          importDialog.remove();
        },
        "1": function() {
          if(jQuery('#ixedit-import-paste').is(':visible')){
            var dataText = jQuery('.ixedit-importingtext').val();
            ixedit.importData(dataText);
          }else if(jQuery('#ixedit-import-db').is(':visible')){
            var importingScreenID = jQuery('.ixedit-listbox', jQuery('#ixedit-import-db')).val();
            ixedit.importOneIxDB(importingScreenID);
          };
          jQuery(this).dialog("destroy");
          jQuery('#ixedit-import-ui').remove();
        }
      },
      open:
        function(){
          var importDialog = jQuery('.ixedit-dialog-import');
          var buttons = jQuery('button:visible', importDialog);
          // Button effects.
          buttons.mousedown(function(){jQuery(this).addClass('ixedit-pushed')}).mouseup(function(){jQuery(this).removeClass('ixedit-pushed')}).mouseout(function(){jQuery(this).removeClass('ixedit-pushed')});
          // Label buttons.
          jQuery(buttons[0]).text(label.mainButtonCancel);
          jQuery(buttons[1]).text(label.mainButtonImport).addClass('ixedit-button-import');
          jQuery('.ui-widget-overlay').addClass('ixedit-overlay'); // Add class to overlay.

          var textArea = jQuery('textarea.ixedit-importingtext', importDialog);
          ixedit.resizeBoxHeightOnDialog(importDialog, textArea, 45);


        },
      close:
        function(){
          importDialog.dialog('destroy');
          importDialog.remove();
        },
      resize:
        function(){
          var importDialog = jQuery('.ixedit-dialog-import');
          if(jQuery('#ixedit-import-paste').is(':visible')){
            var textArea = jQuery('textarea.ixedit-importingtext', importDialog);
            ixedit.resizeBoxHeightOnDialog(importDialog, textArea, 45);
          }else if(jQuery('#ixedit-import-db').is(':visible')){
            var listBox = jQuery('select.ixedit-listbox', importDialog);
            ixedit.resizeBoxHeightOnDialog(importDialog, listBox, 45);
          }
        }
    });
};

// Resize textarea of listbox on dialog while resizing
ixedit.resizeBoxHeightOnDialog = function(dialog, box, bottomOffset){
  var boxPosition = box.position();
  box.css('height', dialog.height() - boxPosition.top - bottomOffset);
};



// JSON dialog.
ixedit.showJSON = function(){
  window.alert(this.encodeIxsJSON(this.ixs));
};






// Command help dialog.
ixedit.showCommadHelp = function(commandName){
  var label = ixedit.label;
  var showCommandHelpDialog = jQuery('<div id="showcommandhelpdialog" title="' + label.commandHelp + '"><div class="ixedit-instruction-content"></div></div>');
    showCommandHelpDialog.dialog({
      width: 600,
      height: 440,
      modal: true,
      resizable: true,
      dialogClass: 'ixedit-dialog ixedit-dialog-commandhelp',
      buttons: {
        "0": function() {
          jQuery(this).dialog("destroy");
          showCommandHelpDialog.remove();
        }
      },
      open:
        function(){
          var commandhelpDialog = jQuery('.ixedit-dialog-commandhelp');
          jQuery('.ixedit-instruction-content', commandhelpDialog).html(ixedit.cmds[commandName].help);
          var buttons = jQuery('button:visible', commandhelpDialog);
          // Button effects.
          buttons.mousedown(function(){jQuery(this).addClass('ixedit-pushed')}).mouseup(function(){jQuery(this).removeClass('ixedit-pushed')}).mouseout(function(){jQuery(this).removeClass('ixedit-pushed')});
          // Label buttons.
          jQuery(buttons[0]).text(label.mainButtonClose);
          jQuery('.ui-widget-overlay').addClass('ixedit-overlay'); // Add class to overlay.
        },
      close:
        function(){
          showCommandHelpDialog.dialog('destroy');
          showCommandHelpDialog.remove();
        }
    });


};



// Encode IXS to JSON
ixedit.encodeIxsJSON = function(ixsArray){
// JSON doesnt need func property of each ix. So first make a temporary array (newJSON) to store copy of ixs contents without func property, then encode it to JSON.
// First argument is the version of data format.
  var newJSON = new Array();
  var ixsArrayLength = ixsArray.length;
  for(var jsonItemCnt=0; jsonItemCnt<ixsArrayLength; jsonItemCnt++){
    var newJsonItem = new Object();
    newJsonItem.name = ixsArray[jsonItemCnt].name;
    newJsonItem.active = ixsArray[jsonItemCnt].active;
    newJsonItem.trigger = ixsArray[jsonItemCnt].trigger;
    newJsonItem.event = ixsArray[jsonItemCnt].event;
    newJsonItem.preventDefault = ixsArray[jsonItemCnt].preventDefault;
    newJsonItem.stopBubbling = ixsArray[jsonItemCnt].stopBubbling;
    newJsonItem.comment = ixsArray[jsonItemCnt].comment;
    newJsonItem.conditions = ixsArray[jsonItemCnt].conditions;
    newJsonItem.actions = ixsArray[jsonItemCnt].actions;
    newJSON[jsonItemCnt] = newJsonItem;
  };
  var savingDataObject = new Object();
  savingDataObject.format = this.format;
  savingDataObject.data = newJSON;
  return JSON.stringify(savingDataObject);
};


// Load JSON by using jQuery Ajax.
// Current IxEdit doesnt use this function.
ixedit.loadJSONAjax = function(jsonpath){
  var platform = this;
  jQuery.getJSON(jsonpath, function(ixAtts){
    platform.jsonToIxs(ixAtts); // 読み込んだデータを ixs 配列に格納
    platform.ixs.setAll(); // ixs 配列全体をバインド
  });
};


// Load commonPrefs JSON from string.
ixedit.loadCommonPrefsJsonString = function(theString){
  if(theString!=''){
    this.commonPrefs = this.JSON.parse(theString);
  } else {
    // Do nothing.
  } 
};


// Load Prefs JSON from string.
ixedit.loadPrefsJsonString = function(theString){
  if(theString!=''){
    this.prefs = this.JSON.parse(theString);
  } else {
    // Do nothing.
  } 
};


// Preformat typed selector value.
ixedit.modifySelectorString = function(selectorString) {
  var newSelectorString = selectorString.replace(/'/g,'\"'); // Single quote to back slash plus double quote.
  return newSelectorString;
};


// Generate ix instance from values of input controls in the edit view.
ixedit.getIxFromInputs = function(){

  var newIx = new this.ix();
  newIx.name = jQuery('#ixedit-name').val();
  newIx.screenName = newIx.name;
  newIx.active = true;
  var theTrigger = ixedit.modifySelectorString(jQuery('#ixedit-trigger').val());

  newIx.trigger = theTrigger;

  newIx.screenTrigger = newIx.trigger;
  newIx.event = jQuery('#ixedit-event').val();
  newIx.screenEvent = this.findOptionScreenName(this.selectOptions.eventHandlers, newIx.event);
  newIx.preventDefault = jQuery('#ixedit-preventdefault').is(':checked');
  newIx.stopBubbling = jQuery('#ixedit-stopbubbling').is(':checked');

  newIx.comment = jQuery('#ixedit-comment').val();
  newIx.screenComment = newIx.comment;


  var actionLines = jQuery('.ixedit-actioninputs'); // Collection of reactions (div.ixedit-actioninputs).
  actionLines = actionLines.not('.ixedit-hidden'); // But not deleted (hidden) ones.

  var conditionLines = jQuery('.ixedit-conditioninputs'); //Collection of conditions (tr).
  conditionLines = conditionLines.not('.ixedit-hidden'); // But not deleted (hidden) ones.


  if (actionLines.length>0){
    actionLines.each(function(){ // For each reaction, do this.

      // If the command is unknown, values are in the special (hidden) inputs. So Gather them.
      if(jQuery('.unchian-unknown-target', jQuery(this)).length>0){
        var targetString = jQuery('.unchian-unknown-target', jQuery(this)).val();
        var delayString = jQuery('.unchian-unknown-delay', jQuery(this)).val();
        var commandString = jQuery('.unchian-unknown-command', jQuery(this)).val();
        var attributesString = jQuery('.unchian-unknown-params', jQuery(this)).val();
        var attributesSubString = jQuery('.unchian-unknown-subparams', jQuery(this)).val();
        var commandAttributesValues = JSON.parse(unescape(attributesString));
        var commandAttributesSubValues = JSON.parse(unescape(attributesSubString));

      }else{ // Normal operation.

        var targetString = ixedit.modifySelectorString(jQuery('.ixedit-target', jQuery(this)).val()); // Target
        var delayString = jQuery('.ixedit-delay', jQuery(this)).val(); // Delay
        var commandString = jQuery('.ixedit-command', jQuery(this)).val(); // Command
        var theAttributesArea = jQuery('.ixedit-attrsarea-' + commandString, jQuery(this)); // Attribute area for the command.

        // Gather values of command attributes.
        var commandAttributes = jQuery('.ixedit-inputitem', theAttributesArea); // Gather normal input elements.
        var commandAttributesValues = new Array();
        commandAttributes.each(function(){ // For each input, do this.
          if(jQuery(this).attr('type')=='checkbox'){ // If checkbox.
            commandAttributesValues[commandAttributesValues.length] = jQuery(this).is(':checked'); // Get boolean value.
          } else { // if regular input elements
            commandAttributesValues[commandAttributesValues.length] = jQuery(this).val(); // Get value.
          }
        });

        // Gather values of command sub-params as multidimensional array.
        var commandAttributesSubValues = new Array(); // Pre-making array.
        var subParamsAreas = jQuery('.subparam', theAttributesArea); // Put subparam areas (tables) into an array.

        if(subParamsAreas.length > 0){ // If there is subparam.
          var subParamsAreasLength = subParamsAreas.length;
          for( var subParamsCnt=0; subParamsCnt<subParamsAreasLength; subParamsCnt++){ // Loop for the length of subparam areas.
            var commandAttributesSub = jQuery('.ixedit-inputitem-sub', subParamsAreas[subParamsCnt]); // Make an array of input elements for one subparam.
            var commandAttributesSubEachValues = new Array(); // Array for values of inputs about one subparam.
            commandAttributesSub.each(function(){
              //Make an array of values from inputs.
              commandAttributesSubEachValues[commandAttributesSubEachValues.length] = jQuery(this).val();
            });
            commandAttributesSubValues[commandAttributesSubValues.length] = commandAttributesSubEachValues; // The multidimensional array of subparam values for one reaction is done.
          }
        };

      }; // end of if


      newIx.actions[newIx.actions.length] = {'target':targetString, 'delay':delayString, 'command':commandString, 'params':commandAttributesValues, 'subparams':commandAttributesSubValues};
    });
  };



  if (conditionLines.length>0){
    conditionLines.each(function(){

      // If the condition command is unknown, values are in the special (hidden) inputs. So Gather them.
      if(jQuery('.unchian-unknown-condtarget', jQuery(this)).length>0){

        var typeString = jQuery('.unchian-unknown-condtype', jQuery(this)).val();
        var targetString = jQuery('.unchian-unknown-condtarget', jQuery(this)).val();
        var commandString = jQuery('.unchian-unknown-condcommand', jQuery(this)).val();
        var attributesString = jQuery('.unchian-unknown-condparams', jQuery(this)).val();
        var commandAttributesValues = JSON.parse(unescape(attributesString));

      }else{

        var typeString = jQuery('.ixedit-cond-type', jQuery(this)).val();
        var targetString = ixedit.modifySelectorString(jQuery('.ixedit-cond-target', jQuery(this)).val());
        var commandString = jQuery('.ixedit-cond-command', jQuery(this)).val();
        var theAttributesArea = jQuery('.ixedit-cond-attrsarea-' + commandString, jQuery(this)); // Attribute area for the command.

        // Gather values of condition command attributes.
        var commandAttributes = jQuery('.ixedit-inputitem', theAttributesArea);
        var commandAttributesValues = new Array();
        commandAttributes.each(function(){ // For each input, do this.
          commandAttributesValues[commandAttributesValues.length] = jQuery(this).val();
        });

      }; // end of if

      newIx.conditions[newIx.conditions.length] = {'type':typeString, 'target':targetString, 'command':commandString, 'params':commandAttributesValues};
    });
  };
  

  

  return newIx; // return new generated ix.

};


// General function to duplicate object.
ixedit.dupObj = function(object) {
  var newObject = new Object();
  for (var property in object) {
    // Copy properties.
    newObject[property] = object[property];
  };
  return newObject;
};


// Duplicate ix
ixedit.duplicate = function() {
  var theIxs = this.ixs;
  var targetIxNos = new Array();
  var currentIxNos = new Array();
  var selectedLineNos = this.prefs.selectedLineNo;
  var selectedLineNosLength = selectedLineNos.length;
  for(var i=0; i<selectedLineNosLength; i++){
    targetIxNos[i] = this.listItems[selectedLineNos[i]].no; // Get ix number of target ix to be duplicated.
    var addingIx = this.dupObj(theIxs[targetIxNos[i]]); // Duplicate the original ix.
    theIxs.add(addingIx); // Add it to ixs array.
    theIxs[this.ixs.length-1].set(); // Bind the added ix.
    currentIxNos[currentIxNos.length] = theIxs.length-1; // Get the new ix number.
  };

  this.prepareList(); // Prepare to sort.
  for(var i=0; i<currentIxNos.length; i++){
    selectedLineNos[i] = this.getListItemNo(currentIxNos[i]);
  };
  this.prefs.selectedLineNo = selectedLineNos; // Update selectedLineNo.

  this.refreshList(true); // Refresh list.
  ixedit.refreshListButtonStates();
  this.showSelectedItem();



  this.updateFullData(); // Save DB

};



// Done
ixedit.save = function(){

  var theIxs = this.ixs;
  if(ixedit.addingNewIx){ // If new
    var targetIxNo = theIxs.length-1; // ix number is as the number of ixs array items.
  } else { // If overwriting
    var selectedLineNos = this.prefs.selectedLineNo;
    var targetIxNo = this.listItems[selectedLineNos[selectedLineNos.length-1]].no; // Get ix number of overwriting target.
  };

  var newIx = this.getIxFromInputs(); // Generate ix instance from inputs.

  newIx.active = theIxs[targetIxNo].active; // ix.active is not changed.

  // Alter trigger property if the event is load or unload.
  if(newIx.event=='load' || newIx.event=='unload'){
    newIx.trigger = ''; // Make the trigger blank.
  };

  theIxs[targetIxNo].unset(); // Unbind old ix.
  theIxs[targetIxNo] = newIx; // Overwrite.

  if(theIxs[targetIxNo].active){ // If it is active.
    theIxs[targetIxNo].set(); //Bind new ix.
  };
  this.showIxlist(); // Show list. ( Please consider if this line should be here or not. )

  this.prepareList();

  this.prefs.selectedLineNo.length = 1;

  this.prefs.selectedLineNo[0] = this.getListItemNo(targetIxNo); // Update selectedLineNo

  this.refreshList(true); // Refresh list.

  ixedit.refreshListButtonStates();
  this.showSelectedItem();



  this.updateFullData(); // Save DB

};

// Realtime bind.
ixedit.realtimeBind = function(targetJqueryObj){
  // Bind to changed event of every input control.
  jQuery(':input', targetJqueryObj).change(function(){
    ixedit.modified = true; // Modified Flag
    ixedit.saveCon(true); // Incremental Saving
  });
};


// Incremental Save
ixedit.saveCon = function(isWithSet){ // Argument is if realtime binding is needed or not.
  if(ixedit.addingNewIx){ // Adding new flag is up.
    var targetIxNo = this.ixs.length-1; // Saving target ix number is the number of ixs items.
  } else { // Normal overwriting.
    var selectedLineNos = this.prefs.selectedLineNo;
    if(selectedLineNos.length>0){
      var targetIxNo = this.listItems[selectedLineNos[selectedLineNos.length-1]].no; // Get the ix number of overwriting target.
    } else {
      return;
    };
  };

  var newIx = this.getIxFromInputs(); // Generate ix instance from inputs.
  newIx.active = this.ixs[targetIxNo].active; // ix.active is not changed.
  this.ixs[targetIxNo].unset(); // Unbind old ix.
  this.ixs[targetIxNo] = newIx; // Overwrite ix.
  if(isWithSet){
    if(this.ixs[targetIxNo].event != 'load' && this.ixs[targetIxNo].event != 'unload'){ // When loading or unloading, dont bind.
      this.ixs[targetIxNo].set(); // Bind new ix.
    }
  };
  // Dont update the list.
  // Dont save DB.

};


//Import ixs
ixedit.importData = function(dataText){ // Argument is importing JSON string.
  var theData = dataText;
  if(this.ixs.length>0){
    this.ixs.unsetAll(); // Unbind all ixs.
  };

  this.loadIxJSONString(theData); // Convert JSON to ixs.
  this.ixs.setAll();
  this.prepareList();
  this.refreshList(true);
  ixedit.refreshListButtonStates();
  if(this.ixs.length > 0){
    this.showSelectedItem();
  };

  this.showIxlist();
};


// Update deploy dialog.
ixedit.refreshDeployDialog = function(){
  if(ixedit.commonPrefs.deployWithComment){
    jQuery('#ixedit-deployoption-1').attr('checked', 'checked');
  } else {
    jQuery('#ixedit-deployoption-1').removeAttr('checked');
  };

  var dataText = this.ixs.getJqueryCode(); // for without ixedit-core

  jQuery('.ixedit-deployingtext').val(dataText);
};

// Function of checkbox in the deploy dialog.
ixedit.checkCommentInclusion = function(theCheckbox){
  if(theCheckbox.is(':checked')){
    this.commonPrefs.deployWithComment = true;
  } else {
    this.commonPrefs.deployWithComment = false;
  };
  var dataText = this.ixs.getJqueryCode(); // for without ixedit-core
  jQuery('.ixedit-deployingtext').val(dataText);
};


// Update export dialog.
ixedit.refreshExportDialog = function(){
  var dataText = this.encodeIxsJSON(this.ixs);
  jQuery('.ixedit-exportingtext').val(dataText);
};




// Delete ix.
ixedit.deleteIx = function(targetIxNos){ // Argument is the array of target ix
  targetIxNos.ixeditSortByNumber();
  targetIxNos.reverse();  // Sort argument array by descent. Then you can delete ixs backward.
  var targetIxNosLength = targetIxNos.length;

  for(var i=0; i<targetIxNosLength; i++){
    var theNum = targetIxNos[i];
    this.ixs[theNum].unset(); // Unbind selected ix.
    this.ixs.del(theNum);
  };

  this.prefs.selectedLineNo.length = []; // Clear the array.

  this.prepareList();

  this.refreshList(true); // Refresh the list.
  ixedit.refreshListButtonStates();



};




// Select one option in the dropdown by looking at the value.
ixedit.selectOne = function(selectElm, theVal){ // select element, value
  var foundOne = false; // Flag down.
  var theOptions = jQuery('option', selectElm);
  theOptions.each(function(){
    if(jQuery(this).val() == theVal){
      jQuery(this).attr('selected', 'selected'); // Select matched option.
      foundOne = true; // Flag up.
    } else {
      jQuery(this).removeAttr('selected');
    };
  });
  if(!foundOne){ // If flag is down
    jQuery(theOptions[0]).attr('selected', 'selected'); // Select the first option.
  };
};


// Generate Basic Inputs UI.
ixedit.appendBasicInputs = function (targetObj, name, active, trigger, event, preventDefault, stopBubbling, isWithEffect, key){

  var label = ixedit.label;
  var basicHTML = new Array();
  basicHTML[basicHTML.length] = '<div class="ixedit-basicinputs"><table><tr><td class="ixedit-basicdetails">';

  basicHTML[basicHTML.length] = '<table class="ixedit-triggerarea-event"><tr><td class="ixedit-labelarea-event ixedit-labelarea-default"><label>' + label.inputLabelEvent + '</label></td><td class="ixedit-inputarea-event ixedit-inputarea-xlarge">';
  basicHTML[basicHTML.length] = '<select id="ixedit-event" onchange="ixedit.showHideTriggers(jQuery(this), ixedit.gimmickAnimation)">';
  basicHTML[basicHTML.length] = ixedit.evtMenuSource; // Source of event menu.
  basicHTML[basicHTML.length] = '</select>';
  basicHTML[basicHTML.length] = '</td><td style="padding: 0 !important">';
  // For Future Key Press Feature 
  // basicHTML[basicHTML.length] = '<table class="ixedit-triggerarea-key"><tr><td class="ixedit-labelarea-xsmall">Key</td><td class="ixedit-inputarea-xsmall"><input type="text" id="ixedit-key" onfocus="this.select()" value="' + key + '" /></td><td>&nbsp;</td></tr></table>';
  basicHTML[basicHTML.length] = '</td></tr></table>';

  basicHTML[basicHTML.length] = '<table class="ixedit-triggerarea-trigger"><tr><td class="ixedit-labelarea-trigger ixedit-labelarea-default"><label>' + label.inputLabelElement + '</label></td><td class="ixedit-inputarea-trigger"><input type="text" id="ixedit-trigger" /></td><td class="ixedit-inputarea-xray"><button class="ixedit-xraybtn" onclick="ixedit.xRay.startXRay(jQuery(\'#ixedit-trigger\'))" title="' + label.tipXRayBtn + '">&nbsp;</button></td></tr></table>';

  basicHTML[basicHTML.length] = '<table class="ixedit-triggerarea-triggeroptions"><tr><td class="ixedit-labelarea-triggeroptions ixedit-labelarea-default"><label>&nbsp;</label></td><td class="ixedit-inputarea-preventdefault ixedit-inputarea-checkbox"><input type="checkbox" id="ixedit-preventdefault" /></td><td class="ixedit-labelarea-preventdefault ixedit-labelarea-xxlarge ixedit-labelarea-checkbox"><label for="ixedit-preventdefault">' + label.inputLabelPreventDefault + '</label></td><td class="ixedit-inputarea-stopbubbling ixedit-inputarea-checkbox"><input type="checkbox" id="ixedit-stopbubbling" /></td><td class="ixedit-labelarea-stopbubbling ixedit-labelarea-xxlarge ixedit-labelarea-checkbox"><label for="ixedit-stopbubbling">' + label.inputLabelStopBubbling + '</label></td><td>&nbsp;</td></tr></table>';

  basicHTML[basicHTML.length] = '</td>';
  basicHTML[basicHTML.length] = '<td class="ixedit-tinybtnarea">&nbsp;</td>';
  basicHTML[basicHTML.length] = '</tr></table></div>';
  jQuery(basicHTML.join('')).appendTo(targetObj);

  jQuery('#ixedit-trigger').val(trigger);

  jQuery('.ixedit-xraybtn', jQuery('.ixedit-basicdetails')).mousedown(function(){jQuery(this).addClass('ixedit-xraybtn-pushed')}).mouseout(function(){jQuery(this).removeClass('ixedit-xraybtn-pushed')});
  
  var theEventSelector = jQuery('#ixedit-event', targetObj);
  this.selectOne(theEventSelector, event);
  this.showHideTriggers(theEventSelector, false);

  if(preventDefault){
    jQuery('#ixedit-preventdefault').attr('checked', 'checked');
  };
  if(stopBubbling){
    jQuery('#ixedit-stopbubbling').attr('checked', 'checked');
  };

  jQuery('#ixedit-key').keypress(function (e) {
    jQuery(this).val(e.which);
    return false;
  });
};


// Append Reaction Inputs UI for Unknown Command.
ixedit.appendUnknownActionInputs = function(targetObj, actionNo, target, delay, command, attributesJson, attributesSubJson, isWithEffect){
  // Use hidden inputs instead of regular input elemtns.
  // params and subparams come as JSON text.
  var label = ixedit.label;
  var theActionId = 'ixedit-action-' + actionNo;
  var actionHTML = new Array();
  actionHTML[actionHTML.length] = '<div class="ixedit-actioninputs" id="' + theActionId + '"><table><tr><td class="ixedit-actiondetails"><p class="ixedit-unknowncommand-prompt">&quot;' + command + '&quot;&nbsp;' + label.messageCommndNotSupported + '</p><input type="hidden" class="unchian-unknown-target" value="' + target + '"/><input type="hidden" class="unchian-unknown-delay" value="' + delay + '"/><input type="hidden" class="unchian-unknown-command" value="' + command + '"/><input type="hidden" class="unchian-unknown-params" value="' + attributesJson + '"/><input type="hidden" class="unchian-unknown-subparams" value="' + attributesSubJson + '"/></td>';
  actionHTML[actionHTML.length] = '<td class="ixedit-tinybtnarea">';
  if(this.enableMultiActions){ // Show tiny buttons.
    actionHTML[actionHTML.length] = '<button class="ixedit-removeaction" title="' + label.remove + '" onclick="ixedit.removeActionInputs(\'' + theActionId + '\')" onmousedown="jQuery(this).addClass(\'ixedit-removeaction-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-removeaction-h\')">&nbsp;</button><button title="' + label.add + '" class="ixedit-addaction" onclick="ixedit.addActionInputs()" onmousedown="jQuery(this).addClass(\'ixedit-addaction-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-addaction-h\')">&nbsp;</button>';
  };
  actionHTML[actionHTML.length] = '</td></tr></table></div>';

  var addingElement = jQuery(actionHTML.join(''));

  addingElement.appendTo(targetObj); // targetObj is as div#ixedit-actionitems
};




// Append Reaction Inputs UI
ixedit.appendActionInputs = function(targetObj, actionNo, target, delay, command, attributesArray, attributesSubArray, isWithEffect){

  var theActionId = 'ixedit-action-' + actionNo;

  var label = ixedit.label;

  var actionHTML = new Array();
  actionHTML[actionHTML.length] = '<div class="ixedit-actioninputs" id="' + theActionId + '"><table><tr><td class="ixedit-actiondetails">';

  actionHTML[actionHTML.length] = '<table><tr><td class="ixedit-labelarea-command ixedit-labelarea-default"><label>' + label.inputLabelCommand + '</label></td><td class="ixedit-inputarea-command ixedit-inputarea-xlarge"><select class="ixedit-command" onchange="ixedit.showHideAttrs2(\'' + actionNo + '\', ' + ixedit.gimmickAnimation + ')">';

  // Command list.
  actionHTML[actionHTML.length] = this.cmdMenuSource;

  actionHTML[actionHTML.length] = '</select></td><td class="ixedit-inputarea-help"><button class="ixedit-commandhelp" title="' + label.commandHelp + '" onmousedown="jQuery(this).addClass(\'ixedit-commandhelp-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-commandhelp-h\')">&nbsp;</button></td>';

  actionHTML[actionHTML.length] = '</tr></table>';

  actionHTML[actionHTML.length] = '<table class="ixedit-cmdtarget"><tr><td class="ixedit-labelarea-target ixedit-labelarea-default"><label>' + label.inputLabelElement + '</label></td><td class="ixedit-inputarea-target"><input type="text" id="ixedit-target-' + actionNo + '"class="ixedit-target" value="" /></td><td class="ixedit-inputarea-xray"><button class="ixedit-xraybtn" onclick="ixedit.xRay.startXRay(jQuery(\'#ixedit-target-' + actionNo + '\'))" title="' + label.tipXRayBtn + '">&nbsp;</button></td></tr></table>';

  actionHTML[actionHTML.length] = '<div class="ixedit-cmdattrs"></div>';

  actionHTML[actionHTML.length] = '<table class="ixedit-cmddelay"><tr><td class="ixedit-labelarea-delay ixedit-labelarea-default"><label>' + label.inputLabelDelay + '</label></td><td class="ixedit-inputarea-delay ixedit-inputarea-medium"><select class="ixedit-delay">';
  var thisSelectOptionsDelayAttrsLength = this.selectOptions.delayAttrs.length;
  for(var h=0; h<thisSelectOptionsDelayAttrsLength; h++){ // Loop for the length of delay options.
    actionHTML[actionHTML.length] = '<option value="' + this.selectOptions.delayAttrs[h][1] + '">' + this.selectOptions.delayAttrs[h][0] + '</option>';
  };
  actionHTML[actionHTML.length] = '</select>';
  actionHTML[actionHTML.length] = '</td><td>&nbsp;</td></tr></table>';

  actionHTML[actionHTML.length] = '</td>';
  actionHTML[actionHTML.length] = '<td class="ixedit-tinybtnarea">';
  if(this.enableMultiActions){ // Show tiny buttons.
    actionHTML[actionHTML.length] = '<button class="ixedit-removeaction" title="' + label.remove + '" onclick="ixedit.removeActionInputs(\'' + theActionId + '\')" onmousedown="jQuery(this).addClass(\'ixedit-removeaction-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-removeaction-h\')">&nbsp;</button><button title="' + label.add + '" class="ixedit-addaction" onclick="ixedit.addActionInputs()" onmousedown="jQuery(this).addClass(\'ixedit-addaction-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-addaction-h\')">&nbsp;</button>';
  };
  actionHTML[actionHTML.length] = '</td>';
  actionHTML[actionHTML.length] = '</tr></table></div>';

  var addingElement = jQuery(actionHTML.join(''));
  addingElement.hide();
  addingElement.appendTo(targetObj); // targetObj is as div#ixedit-actionitems.
  if(isWithEffect){
    if(jQuery('#ixedit-commentitems').height() != 100){ // If scrolled.
      jQuery('#ixedit-ui').removeClass('ixedit-input'); // Overflow to hidden to hide scrollbar.
    };
    addingElement.fadeIn('slow');
    setTimeout(function(){ixedit.resizeCommentHeight(); jQuery('#ixedit-ui').addClass('ixedit-input')}, 1);
    // Using setTimeout here to resize comment field right after the fadein starts. If they start at the same time, you cannot get the height. Callback may be too late.
  } else {
    addingElement.show();
  };

  var targetActionLine = jQuery('#'+theActionId); // Target reaction (tr).


  this.selectOne(jQuery('.ixedit-delay', targetActionLine), delay); // Select right option in the delay dropdown of target reaction (tr).
  this.selectOne(jQuery('.ixedit-command', targetActionLine), command); // Select right option in the command dropdown of target reaction (tr).
  this.showHideAttrs2(actionNo, false); // Show or hide attributes.


  // Insert values of the command's attributes into each control.

  jQuery('.ixedit-target', targetActionLine).val(target); // Target value.

  var theAttributesArea = jQuery('.ixedit-attrsarea-' + command, targetActionLine); // Get attribute area of the command.
  var attributeControls = jQuery('.ixedit-inputitem', theAttributesArea); // Regular params.


  attributeControls.each(function(i){ // Treat regular params.
    var theVal = attributesArray[i];
    if(jQuery(this).attr('type')=='checkbox'){
      if(theVal==true){
        jQuery(this).attr('checked', 'checked');
      }else{
        jQuery(this).removeAttr('checked');
      };
    } else {
      jQuery(this).val(attributesArray[i]);
    };
  });

  // Treat subparams. Add submaram areas as needed and give values to each control.
  var attributesSubArrayLengthMinusOne = attributesSubArray.length-1;
  for(var subparamCnt=0; subparamCnt<attributesSubArrayLengthMinusOne; subparamCnt++){ // Loop for the length of subparam - 1 ( first one is always shown. So -1.)
    // Add subparam area.
    if(command){ // When a new ix is being created, command is not specified. So do this only when command is specified.
      var subparamAddButton = jQuery('.ixedit-subparam-addbutton', targetActionLine); // Button to add subparam (always there is only one).
      ixedit.addSubParam(subparamAddButton, command); // Generate a subparam area using the button and command as arguments.
    } // The inputs for the subparam are already shown at this point.
  };
  // Insert values for generated subaparam areas.
  var subParamsAreas = jQuery('.subparam', theAttributesArea); // Get subparam areas (tables) as an array.
  if(subParamsAreas.length > 0){ // If there is a subparam area.
    var subParamsAreasLength = subParamsAreas.length;
    for( var subParamsCnt=0; subParamsCnt<subParamsAreasLength; subParamsCnt++){ // Loop for the length of subparam areas.
      var eachSubParamInputs = jQuery('.ixedit-inputitem-sub', subParamsAreas[subParamsCnt]); // Get input contols for one subparam area as an array.
      var eachSubParamInputsLength = eachSubParamInputs.length;
      for(var zzz=0; zzz<eachSubParamInputsLength; zzz++){ // Loop for the length of input controls for one subparam area.
        jQuery(eachSubParamInputs[zzz]).val(attributesSubArray[subParamsCnt][zzz]); // Get values from attributesSubArray ( one of the arguments of appendActionInputs function ) and insert them.
      };
    }
  };

  if(command && command!='' && this.cmds[command]){ // If the command exists.
    this.cmds[command].afterValueLoadedFunc(targetActionLine); // Special function from the cmd instance that is executed after loading.
  };

  jQuery('.ixedit-xraybtn', targetObj).mousedown(function(){jQuery(this).addClass('ixedit-xraybtn-pushed')}).mouseout(function(){jQuery(this).removeClass('ixedit-xraybtn-pushed')});

};




// Append Reaction Inputs UI for Unknown Command.
ixedit.appendUnknownConditionInputs = function(targetObj, conditionNo, type, target, command, attributesJson, isWithEffect){
  // Use hidden inputs instead of regular input elemtns.
  // params and subparams come as JSON text.
  var label = ixedit.label;
  var theConditionId = 'ixedit-condition-' + conditionNo;
  var conditionHTML = new Array();
  conditionHTML[conditionHTML.length] = '<div class="ixedit-conditioninputs" id="' + theConditionId + '"><table><tr><td class="ixedit-conditiondetails"><p class="ixedit-unknowncommand-prompt">&quot;' + command + '&quot;&nbsp;' + label.messageCommndNotSupported + '</p><input type="hidden" class="unchian-unknown-condtype" value="' + type + '"/><input type="hidden" class="unchian-unknown-condtarget" value="' + target + '"/><input type="hidden" class="unchian-unknown-condcommand" value="' + command + '"/><input type="hidden" class="unchian-unknown-condparams" value="' + attributesJson + '"/></td>';
  conditionHTML[conditionHTML.length] = '</td><td class="ixedit-tinybtnarea"><button class="ixedit-removecondition" title="' + label.remove + '" onclick="ixedit.removeConditionInputs(\'' + theConditionId + '\')" onmousedown="jQuery(this).addClass(\'ixedit-removecondition-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-removecondition-h\')">&nbsp;</button><button class="ixedit-addcondition" title="' + label.add + '" onclick="ixedit.addConditionInputs()" onmousedown="jQuery(this).addClass(\'ixedit-addcondition-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-addcondition-h\')">&nbsp;</button></td>';
  conditionHTML[conditionHTML.length] = '</tr></table></div>';

  var addingElement = jQuery(conditionHTML.join(''));
  addingElement.appendTo(targetObj); // targetObj is as div#ixedit-actionitems.
};


// Append Condition Inputs UI
ixedit.appendConditionInputs = function(targetObj, conditionNo, type, target, command, attributesArray, isWithEffect){
  var label = ixedit.label;
  var theConditionId = 'ixedit-condition-' + conditionNo;

  var conditionHTML = new Array();
  conditionHTML[conditionHTML.length] = '<div class="ixedit-conditioninputs" id="' + theConditionId + '"><table><tr><td class="ixedit-conditiondetails">';
  conditionHTML[conditionHTML.length] = '<table><tr><td class="ixedit-labelarea-command ixedit-labelarea-default"><label>' + label.inputLabelCommand + '</label></td><td class="ixedit-inputarea-command ixedit-inputarea-xlarge"><select class="ixedit-cond-command" onchange="ixedit.showHideCondAttrs2(\'' + theConditionId + '\', true)">';

  conditionHTML[conditionHTML.length] = ixedit.condCmdMenuSource;

  conditionHTML[conditionHTML.length] = '</select>';
  conditionHTML[conditionHTML.length] = '</td><td class="ixedit-inputarea-help">' + label.of + '</td></tr></table>';
  conditionHTML[conditionHTML.length] = '<table><tr><td class="ixedit-labelarea-target ixedit-labelarea-default"><label>' + label.inputLabelElement + '</label></td><td class="ixedit-inputarea-target"><input type="text" id="ixedit-cond-target-' + conditionNo + '"class="ixedit-cond-target" value="" /></td><td class="ixedit-inputarea-xray"><button class="ixedit-xraybtn" onclick="ixedit.xRay.startXRay(jQuery(\'#ixedit-cond-target-' + conditionNo + '\'))" title="' + label.tipXRayBtn + '">&nbsp;</button></td></tr></table>';
  conditionHTML[conditionHTML.length] = '<table><tr><td class="ixedit-labelarea-cond-type ixedit-labelarea-default">&nbsp;</td><td class="unchian-inputarea-cond-type ixedit-inputarea-large"><select class="ixedit-cond-type"><option class="ixedit-cond-type-1" value="if">' + label.condTypeIf + '</option><option class="ixedit-cond-type-2" value="ifnot">' + label.condTypeIfNot + '</option></select></td><td>&nbsp;</td></tr></table>';

  conditionHTML[conditionHTML.length] = '<div class="ixedit-cmdattrs"></div>';

  conditionHTML[conditionHTML.length] = '</td><td class="ixedit-tinybtnarea"><button class="ixedit-removecondition" title="' + label.remove + '" onclick="ixedit.removeConditionInputs(\'' + theConditionId + '\')" onmousedown="jQuery(this).addClass(\'ixedit-removecondition-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-removecondition-h\')">&nbsp;</button><button class="ixedit-addcondition" title="' + label.add + '" onclick="ixedit.addConditionInputs()" onmousedown="jQuery(this).addClass(\'ixedit-addcondition-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-addcondition-h\')">&nbsp;</button></td>';

  conditionHTML[conditionHTML.length] = '</tr></table></div>';

  var addingElement = jQuery(conditionHTML.join(''));
  addingElement.hide();
  addingElement.appendTo(targetObj); // targetObj is as div#ixedit-conditionitems.
  if(isWithEffect){
    if(jQuery('#ixedit-commentitems').height() != 100){ // If scrolled.
      jQuery('#ixedit-ui').removeClass('ixedit-input'); // Overflow to hidden to hide scrollbar.
    };
    addingElement.fadeIn('slow');
    setTimeout(function(){ixedit.resizeCommentHeight(); jQuery('#ixedit-ui').addClass('ixedit-input')}, 1);
    // Using setTimeout here to resize comment field right after the fadein starts. If they start at the same time, you cannot get the height. Callback may be too late.
  } else {
    addingElement.show();
  };

  var targetConditionLine = jQuery('#'+theConditionId); // Target condition (tr).


  this.selectOne(jQuery('.ixedit-cond-type', targetConditionLine), type); // Select right option in the condition type dropdown of target condition.
  this.selectOne(jQuery('.ixedit-cond-command', targetConditionLine), command); // Select right option in the command dropdown of target condition.

  this.showHideCondAttrs2(theConditionId, false); // Show or hide attributes.


  jQuery('.ixedit-xraybtn', targetObj).mousedown(function(){jQuery(this).addClass('ixedit-xraybtn-pushed')}).mouseout(function(){jQuery(this).removeClass('ixedit-xraybtn-pushed')});

  // Insert values of the command's attributes into each control.

  jQuery('.ixedit-cond-target', targetConditionLine).val(target); // Target value

  var theAttributesArea = jQuery('.ixedit-cond-attrsarea-' + command, targetConditionLine); // Get attribute area of the command.
  var attributeControls = jQuery('.ixedit-inputitem', theAttributesArea);
  var commandAttributesValues = new Array();
  if(attributeControls.length >= attributesArray.length){ // If the length of given controls is enough.
    attributeControls.each(function(i){ // Treat each control.
      jQuery(this).val(attributesArray[i])
    });
  };


};

// Append Blank Condition Inputs UI for the case of that there is no condition.
ixedit.appendBlankConditionInputs = function(targetObj){
  var label = ixedit.label;
  var conditionHTML = new Array();
  conditionHTML[conditionHTML.length] = '<div class="ixedit-conditioninputsblank" id="ixedit-condition-blank"><table><tr><td class="ixedit-conditiondetails">';
  conditionHTML[conditionHTML.length] = '<table><tr><td><p class="ixedit-blankcond-prompt">' + label.messageNoCondition + '</p></td></tr></table>';
  conditionHTML[conditionHTML.length] = '</td><td class="ixedit-tinybtnarea"><button class="ixedit-addcondition" title="' + label.add + '" onclick="jQuery(\'#ixedit-condition-blank:first\').hide(); ixedit.addConditionInputs()" onmousedown="jQuery(this).addClass(\'ixedit-addcondition-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-addcondition-h\')">&nbsp;</button></td></tr></table></div>';
  jQuery(conditionHTML.join('')).appendTo(targetObj);
};

// Append Comment Input UI
ixedit.appendCommentInputs = function (targetObj, comment, isWithEffect){
  var commentHTML = new Array();
  commentHTML[commentHTML.length] = '<div class="ixedit-commentinputs"><table><tr><td class="ixedit-commentdetails">';
  commentHTML[commentHTML.length] = '<table><tr><td class="ixedit-labelarea-comment ixedit-labelarea-default">&nbsp;</td><td class="ixedit-inputarea-comment"><textarea id="ixedit-comment" rows="">' + comment + '</textarea></td></tr></table>';
  commentHTML[commentHTML.length] = '</td><td class="ixedit-tinybtnarea">&nbsp;</td></tr></table></div>';
  jQuery(commentHTML.join('')).appendTo(targetObj);
};



// Show of hide attributes of Action area.
ixedit.showHideTriggers = function(theSelect, isWithEffect){
  var theTarget = jQuery('.ixedit-basicdetails');
  var theEventValue = theSelect.val();

  if(theEventValue=='load' || theEventValue=='unload') {
    if(isWithEffect){
      jQuery('.ixedit-triggerarea-trigger', theTarget).hide();
      jQuery('.ixedit-triggerarea-triggeroptions', theTarget).hide();
    } else {
      jQuery('.ixedit-triggerarea-trigger', theTarget).hide();
      jQuery('.ixedit-triggerarea-triggeroptions', theTarget).hide();
    };
  } else {
    if(isWithEffect){
      jQuery('.ixedit-triggerarea-trigger', theTarget).fadeIn('slow');
      jQuery('.ixedit-triggerarea-triggeroptions', theTarget).fadeIn('slow');
    } else {
      jQuery('.ixedit-triggerarea-trigger', theTarget).show();
      jQuery('.ixedit-triggerarea-triggeroptions', theTarget).show();
    };
  };
  /* For Future Key Press Feature
  if(theEventValue=='keypress'){
    if(isWithEffect){
      jQuery('.ixedit-triggerarea-key', theTarget).fadeIn('slow');
    } else {
      jQuery('.ixedit-triggerarea-key', theTarget).show();
    }
  }else{
    if(isWithEffect){
      jQuery('.ixedit-triggerarea-key', theTarget).hide();
    } else {
      jQuery('.ixedit-triggerarea-key', theTarget).hide();
    }
  };
  */

  ixedit.resizeCommentHeight();
  
};

// Show or hide attributes for a reaction.
ixedit.showHideAttrs2 = function(actionNo, isWithEffect){

  var theActionId = 'ixedit-action-' + actionNo;
  var theTarget = jQuery('#'+theActionId); // target reaction area such as div.ixedit-actionitem-0.
  var theWrapper = jQuery('.ixedit-cmdattrs', theTarget);
  var theCommandValue = jQuery('.ixedit-command', theTarget).val();
  var theCmd = ixedit.cmds[theCommandValue];

  if(theCmd.dontNeedTarget==true){ // If the command doesnt need target.
    jQuery('.ixedit-cmdtarget', theTarget).hide();
  } else {
    if(isWithEffect){
      jQuery('.ixedit-cmdtarget', theTarget).fadeIn();
    }else{
      jQuery('.ixedit-cmdtarget', theTarget).show();
    };
  };
  if(theCmd.dontNeedDelay==true){ // If the command doesnt need delay.
    jQuery('.ixedit-cmddelay', theTarget).hide();
  } else {
    if(isWithEffect){
      jQuery('.ixedit-cmddelay', theTarget).fadeIn();
    }else{
      jQuery('.ixedit-cmddelay', theTarget).show();
    };
  };

  var theContent = this.cmds[theCommandValue].jqueryObj(actionNo); // Append input controls for the command as jQuery objects.
  theContent.hide();
  theWrapper.empty();
  theWrapper.append(theContent);

  if(isWithEffect){
    theContent.fadeIn();
  } else {
    theContent.show();
  };
  ixedit.resizeCommentHeight();
  this.realtimeBind(theWrapper); // Binding within the added area for realtime binding.

  var buttons = jQuery('.ixedit-commandhelp', theTarget);
  buttons.off('click'); // Unbind command help.
  buttons.click(function(){ixedit.showCommadHelp(theCommandValue)}); // Bind command help again.

  // Kick the special function from the cmd instance.
  theCmd.initFunc(theTarget);

};




// Show or hide attributes for a condition.
ixedit.showHideCondAttrs2 = function(theConditionId, isWithEffect){
  var theTarget = jQuery('#'+theConditionId); // target condition area such as div.ixedit-conditionitem-0.
  var theWrapper = jQuery('.ixedit-cmdattrs', theTarget);
  var theCommandValue = jQuery('.ixedit-cond-command', theTarget).val();

  var theContent = this.condcmds[theCommandValue].jqueryObj(); // Append input controls for the command as jQuery objects.
  theContent.hide();
  theWrapper.empty();
  theWrapper.append(theContent);
  if(isWithEffect){
    theContent.fadeIn();
  } else {
    theContent.show();
  };
  this.realtimeBind(theWrapper); // Binding within the added area for realtime binding.
};



// Add new ix.
ixedit.addNewIx = function(){
  this.addingNewIx = true; // Flag for adding new.
  var tempIx = new this.ix(); // Temporary ix.
  tempIx.active = true;
  tempIx.trigger = '';
  tempIx.event = 'click';
  tempIx.actions = [{'target':'', 'delay':'0', 'command':'addClass', 'params':['', ''], 'subparams':[['', '']]}];
  this.ixs.add(tempIx); // Add the tempIx ix to ixs array.
  tempIx.set(); // Bind tempIx.
  this.bufferIx(tempIx); // Buffer Ix to be shown.
  this.refreshIxInputBox(tempIx);
  this.showIxinputbox();
};



// Show or hide 'add reaction' and 'remove reaction' buttons.
ixedit.showHideActnBtn = function(){
  jQuery('.ixedit-addaction').hide(); // Hide all add reaction buttons.
  var actionAreas = jQuery('.ixedit-actioninputs', jQuery('#ixedit-actionitems')); // Get reaction areas.
  actionAreas = actionAreas.not('.ixedit-hidden'); // except removed (hidden) ones.
  if(actionAreas.length==1){ // If there is only one reaction.
    jQuery('.ixedit-removeaction').hide(); // Hide remove button
    jQuery('.ixedit-addaction:first', actionAreas[actionAreas.length-1]).addClass('ixedit-initialbutton');
  } else { // If there are two or more reactions.
    jQuery('.ixedit-removeaction').show(); // Show remove button.

  };
  // Show add button for the last reaction.
  jQuery('.ixedit-addaction:first', actionAreas[actionAreas.length-1]).show();
};

// Show or hide 'add condition' and 'remove condition' buttons.
ixedit.showHideCndtnBtn = function(){
  jQuery('.ixedit-addcondition').hide(); // Hide all add condition buttons.
  var conditionAreas = jQuery('.ixedit-conditioninputs'); // Get condition areas.
  conditionAreas = conditionAreas.not('.ixedit-hidden'); // except removed (hidden) ones.
  if(conditionAreas.length<1){ // If there is no condition.
    var conditionBlank = jQuery('#ixedit-condition-blank');
    conditionBlank.show(); // Show blank condition.
    jQuery('.ixedit-addcondition', conditionBlank).show();
  } else { // If there is one or more condition(s).
    // Show add button for the last condition.
    jQuery('.ixedit-addcondition', conditionAreas[conditionAreas.length-1]).show();
  };
};

// Buffer ix
ixedit.bufferIx = function(ixObj) { // Buffer the members of ix as a different object.
  this.bufferedIx = new this.ix; // Temporary ix instance for being buffered.
  this.bufferedIx.name = ixObj.name;
  this.bufferedIx.active = ixObj.active;
  this.bufferedIx.trigger = ixObj.trigger;
  this.bufferedIx.event = ixObj.event;
  this.bufferedIx.comment = ixObj.comment;
  this.bufferedIx.conditions = ixObj.conditions;
  this.bufferedIx.actions = ixObj.actions;
};


// Revert ix inputs by using bufferedIx.
ixedit.resetIxInputBox = function(){
  this.refreshIxInputBox(this.bufferedIx);
  if(!jQuery('#ixedit-cmnt').hasClass('ixedit-hidden')){
    ixedit.resizeCommentHeight();
  };
  ixedit.saveCon(true);
};






// Refresh Edit View with given ix instance.
ixedit.refreshIxInputBox = function(ixObj){

  jQuery('#ixedit-basicitems').empty(); // Clear
  jQuery('#ixedit-actionitems').empty(); // Clear
  jQuery('#ixedit-conditionitems').empty(); // Clear
  jQuery('#ixedit-commentitems').empty(); // Clear

  this.appendBasicInputs(jQuery('#ixedit-basicitems'), ixObj.name, ixObj.active, ixObj.trigger, ixObj.event, ixObj.preventDefault, ixObj.stopBubbling, false); // Basic inputs

  // Loop for the length of reactions.
  var ixObjActionsLength = ixObj.actions.length;
  for(var i=0; i<ixObjActionsLength; i++){ // For each reaction.
    var theActions = ixObj.actions[i];

    if(ixedit.cmds[theActions.command]){ // If the command is supported.
      this.appendActionInputs(jQuery('#ixedit-actionitems'), i, theActions.target, theActions.delay, theActions.command, theActions.params, theActions.subparams, false);
    }else{ // If not.
      var theParams = escape(JSON.stringify(theActions.params)); // Convert params to JSON.
      var theSubParams = escape(JSON.stringify(theActions.subparams)); // Convert subparams to JSON.
      ixedit.appendUnknownActionInputs(jQuery('#ixedit-actionitems'), i, theActions.target, theActions.delay, theActions.command, theParams, theSubParams, false);
    };
  };
  if(ixObjActionsLength==1){
    jQuery('.ixedit-titlestatusarea-action').text(ixObjActionsLength + ' ' + ixedit.label.inputHeaderStatusItem); // Update area titlebar status.
  }else if(ixObjActionsLength>1){
    jQuery('.ixedit-titlestatusarea-action').text(ixObjActionsLength + ' ' + ixedit.label.inputHeaderStatusItems); // Update area titlebar status.
  };
  // Show or hide tiny buttons.
  this.showHideActnBtn();

  // Generate condition elements.
  this.appendBlankConditionInputs(jQuery('#ixedit-conditionitems')); // Generate blank one for the first.
  if(ixObj.conditions.length > 0){ // If there is a condition.
    jQuery('#ixedit-condition-blank').hide(); // Hide the blank one.
    var ixObjConditionsLength = ixObj.conditions.length;
    for(var i=0; i<ixObjConditionsLength; i++){ // For each condition.
      var theConditions = ixObj.conditions[i];
      if(ixedit.condcmds[theConditions.command]){ // If the condition is supported.
        this.appendConditionInputs(jQuery('#ixedit-conditionitems'), i, theConditions.type, theConditions.target, theConditions.command, theConditions.params, false);
      }else{ // If not.
        var theParams = escape(JSON.stringify(theConditions.params)); // Convert params to JSON.
        ixedit.appendUnknownConditionInputs(jQuery('#ixedit-conditionitems'), i, theConditions.type, theActions.target, theConditions.command, theParams, false);
      };

    };
    if(ixObj.conditions.length==1){
      jQuery('.ixedit-titlestatusarea-condition').text(ixObj.conditions.length + ' ' + ixedit.label.inputHeaderStatusItem); // Update area titlebar status.
    }else{
      jQuery('.ixedit-titlestatusarea-condition').text(ixObj.conditions.length + ' ' + ixedit.label.inputHeaderStatusItems); // Update area titlebar status.
    };
  }else{
    jQuery('.ixedit-titlestatusarea-condition').text(ixedit.label.inputHeaderStatusNone); // Update area titlebar status.
  };

  // Show or hide tiny buttons.
  this.showHideCndtnBtn();

  // Append Comment Inputs.
  this.appendCommentInputs(jQuery('#ixedit-commentitems'), ixObj.comment, false);

  // Update status for comment area titlebar.
  var updateCommentStatus = function(){
    var theCommentInput = jQuery('#ixedit-comment');
    if(theCommentInput.val() != ''){
      jQuery('.ixedit-titlestatusarea-comment').text(ixedit.label.inputHeaderStatusCommented); // Update area titlebar status.
    }else{
      jQuery('.ixedit-titlestatusarea-comment').text(ixedit.label.inputHeaderStatusNone); // Update area titlebar status.
    };
  };
  updateCommentStatus();
  jQuery('#ixedit-commentitems').on('change', updateCommentStatus);

  // Binding for realtime binding.
  var targetArea = jQuery('#ixedit-inputbox');
  this.realtimeBind(targetArea);


};


// Add reaction inputs.
ixedit.addActionInputs = function(){
  var actionCnt = jQuery('.ixedit-actioninputs').length; // Current number of reactions.
  this.appendActionInputs(jQuery('#ixedit-actionitems'), actionCnt, '', '', '', [], [], ixedit.gimmickAnimation);
  var newNumber = jQuery('.ixedit-actioninputs:visible').length;
  jQuery('.ixedit-titlestatusarea-action').text(newNumber + ' ' + ixedit.label.inputHeaderStatusItems); // Update area titlebar status.
  this.showHideActnBtn();
  this.realtimeBind(jQuery('#ixedit-action-' + actionCnt)); // Binding within added area for realtime binding.
};

// Add condition inputs.
ixedit.addConditionInputs = function(){
  var conditionCnt = jQuery('.ixedit-conditioninputs').length; // Current number of conditions.
  this.appendConditionInputs(jQuery('#ixedit-conditionitems'), conditionCnt, 'if', '', '', [], ixedit.gimmickAnimation);
  var newNumber = jQuery('.ixedit-conditioninputs:visible').length;
  if(newNumber==1){
    jQuery('.ixedit-titlestatusarea-condition').text(newNumber + ' ' + ixedit.label.inputHeaderStatusItem); // Update area titlebar status.
  }else if(newNumber>1){
    jQuery('.ixedit-titlestatusarea-condition').text(newNumber + ' ' + ixedit.label.inputHeaderStatusItems); // Update area titlebar status.
  };
  this.showHideCndtnBtn();
  ixedit.realtimeBind(jQuery('#ixedit-condition-' + conditionCnt)); // Binding within added area for realtime binding.
};

// Remove reaction inputs.
ixedit.removeActionInputs = function(theActionId){
  jQuery('#'+theActionId).addClass('ixedit-hidden').hide();
  var newNumber = jQuery('.ixedit-actioninputs:visible').length;
  if(newNumber==1){
    jQuery('.ixedit-titlestatusarea-action').text(newNumber + ' ' + ixedit.label.inputHeaderStatusItem); // Update area titlebar status.
  }else if(newNumber>1){
    jQuery('.ixedit-titlestatusarea-action').text(newNumber + ' ' + ixedit.label.inputHeaderStatusItems); // Update area titlebar status.
  };
  this.showHideActnBtn();
  this.resizeCommentHeight();
  this.saveCon(true); // Do realtime bind.
};

// Remove condition inputs.
ixedit.removeConditionInputs = function(theConditionId){
  jQuery('#'+theConditionId).addClass('ixedit-hidden').hide();
  var newNumber = jQuery('.ixedit-conditioninputs:visible').length;
  if(newNumber>0){
    if(newNumber==1){
      jQuery('.ixedit-titlestatusarea-condition').text(newNumber + ' ' + ixedit.label.inputHeaderStatusItem); // Update area titlebar status.
    }else{
      jQuery('.ixedit-titlestatusarea-condition').text(newNumber + ' ' + ixedit.label.inputHeaderStatusItems); // Update area titlebar status.
    };
  }else{
    jQuery('.ixedit-titlestatusarea-condition').text(ixedit.label.inputHeaderStatusNone); // Update area titlebar status.
  };
  this.showHideCndtnBtn();
  this.resizeCommentHeight();
  this.saveCon(true); // Do realtime bind.
};


// Add subparam.
ixedit.addSubParam = function(obj, cmdName){ // Arguments: clicked add button and command name.
  var theCmd = this.cmds[cmdName];
  var theHTML = ixedit.makeSubParams(theCmd);
  var targetArea = jQuery(obj).parents('.ixedit-attrsarea-' + cmdName); // parent element of subparam such as div.ixedit-attrsarea-xxx.
  targetArea.append(theHTML);
  ixedit.resizeCommentHeight();
  ixedit.realtimeBind(jQuery('.subparam:last', targetArea)); // Binding within added area for realtime binding.
  ixedit.setSubParamsButtons(targetArea, cmdName); // targetArea is as  div.ixedit-attrsarea-xxx.
};

// Remove subparam.
ixedit.removeSubParam = function(obj, cmdName){ // 引Arguments: clicked remove button and command name.
  var targetSubParam = jQuery(obj).parents('.subparam'); // Target subparam (table) to be removed.
  var targetArea = targetSubParam.parents('.ixedit-attrsarea-' + cmdName);
  targetSubParam.remove();
  ixedit.resizeCommentHeight();
  this.saveCon(true); // Do realtime bind.
  this.setSubParamsButtons(targetArea, cmdName);
};

// Set subparam buttons.
ixedit.setSubParamsButtons = function(obj, cmdName){ // Arguments: target subparam such as div.ixedit-attrsarea-xxx and command name.
  function addRemoveButton(targetArea, cmdName){
    targetArea.append(ixedit.makeSubParamsRemoveButtonHTML(cmdName));
  };
  function addAddButton(targetArea, cmdName){
    targetArea.append(ixedit.makeSubParamsAddButtonHTML(cmdName));
  };

  var subParamBtnAreas = jQuery('.subparambuttonarea', obj);

  jQuery('.subparam-removebutton', subParamBtnAreas).remove(); // Remove all subparam remove buttons.
  jQuery('.ixedit-subparam-addbutton', subParamBtnAreas).remove(); // Remove all subparam add button.
  if(subParamBtnAreas.length > 1){ // If there are two or more subparams.
    jQuery.each(subParamBtnAreas, function(){
      addRemoveButton(jQuery(this), cmdName); // Add remove button to all subparams.
    });
  };
  addAddButton(jQuery(subParamBtnAreas[subParamBtnAreas.length-1]), cmdName); // Add add button to the last subparam.
};

//Make HTML for the subparam.
ixedit.makeSubParamsHTML = function(theCmd){
  var theHTML = new Array();
  var theCmdCubParamAttrsHTMLsLength = theCmd.subParamAttrsHTMLs.length;
  for(var i=0; i<theCmdCubParamAttrsHTMLsLength; i++){
    theHTML[theHTML.length] = theCmd.subParamAttrsHTMLs[i];
  };
  theHTML[theHTML.length] = '';
  return theHTML.join('');
};

// Make HTML for subparam add button.
ixedit.makeSubParamsAddButtonHTML = function(theCmdName){
  return '<button class="ixedit-subparam-addbutton" onclick="ixedit.addSubParam(this, \'' + theCmdName + '\')" onmousedown="jQuery(this).addClass(\'ixedit-subparam-addbutton-h\')" onmousedown="jQuery(this).removeClass(\'ixedit-subparam-addbutton-h\')">&nbsp;</button>';
};

// Make HTML for subparam remove button.
ixedit.makeSubParamsRemoveButtonHTML = function(theCmdName){
  return '<button class="subparam-removebutton" onclick="ixedit.removeSubParam(this, \'' + theCmdName + '\')" onmousedown="jQuery(this).addClass(\'ixedit-subparam-removebutton-h\')" onmousedown="jQuery(this).removeClass(\'ixedit-subparam-removebutton-h\')">&nbsp;</button>';
};

// Make subparams.
ixedit.makeSubParams = function(theCmd){ // Arguments: cmd instance that called this function.
  var theHTML = new Array();
  theHTML[theHTML.length] = '<table class="subparam"><tr>' + ixedit.makeSubParamsHTML(theCmd);
  theHTML[theHTML.length] = '<td class="subparambuttonarea">' + ixedit.makeSubParamsAddButtonHTML(theCmd.name) + '</td>';
  theHTML[theHTML.length] = '</tr></table>';
  return theHTML.join('');
};



//Convert array of ixedit.selectOptions to option elements.
ixedit.arrayToOptions = function(theArray){
  var theHTML = new Array();
  var theArrayLength = theArray.length;
  for(var i=0; i<theArrayLength; i++){
    theHTML[theHTML.length] = '<option value="' + theArray[i][1] + '">' + theArray[i][0] + '</option>';
  };
  return theHTML.join('');
};




// --- X-Ray 

ixedit.xRay = new Object();
ixedit.xRay.xRayedElement = jQuery('<rosetta></rosetta>');
ixedit.xRay.theSelectors = new Array(); // Selector candidates array.
ixedit.xRay.targetSelectorBox = jQuery('<rosetta></rosetta>');
ixedit.xRay.avoiding = false;
ixedit.xRay.onEsc = function(event){
  if(jQuery('#ixedit-xrayguidebox').is(':visible') && event.keyCode == jQuery.ui.keyCode.ESCAPE){
    ixedit.xRay.endXRay();
  };
};


// Update X-Ray highlight.
ixedit.xRay.showTheX = function(targetElement){
  if(this.xRayedElement!=targetElement){
    var xRayedBox = jQuery('#ixedit-xrayedbox');
    xRayedBox.show();
    xRayedElement = targetElement;
    var theHeight = xRayedElement.outerHeight();
    var theWidth = xRayedElement.outerWidth();
    var theOffset = xRayedElement.offset();
    var theX = xRayedBox;
    theX.height(theHeight);
    theX.width(theWidth);
    theX.css('top', theOffset.top);
    theX.css('left', theOffset.left);
  };
};

// Show selector menu.
ixedit.xRay.showSelectors = function(selectorsArray, theEvent){
  var selectorBox = jQuery('#ixedit-xrayselectorbox');
  var selectorMenu = jQuery('#ixedit-selectormenu');
  selectorMenu.empty();
  for(var i=0; i<selectorsArray.length; i++){
    selectorMenu.append('<li class="ixedit-selectormenuitem" id="ixedit-selectormenuitem-' + i + '">' + selectorsArray[i] + '</li>');
  };
  var pageWidth = jQuery('html').width();
  if(theEvent.pageX+180 < pageWidth){
    selectorBox.css('left', theEvent.pageX).removeClass('ixedit-xrayselectorbox-right');
  } else {
    selectorBox.css('left', theEvent.pageX-169).addClass('ixedit-xrayselectorbox-right'); // 169 is the #ixedit-xrayselectorbox's width
  };
  selectorBox.css('top', theEvent.pageY-15);
  // Binding
  jQuery('.ixedit-selectormenuitem').hover(
    function(){jQuery(this).addClass('selected')},
    function(){jQuery(this).removeClass('selected')}
  ).mouseup(
    function(theEvent){
      ixedit.xRay.getSelector(jQuery(this).text());
      return false;
    }
  ).mousedown(
    function(){return false;}
  );
};

// Get selector.
ixedit.xRay.getSelector = function(theValue){
  var originalTextboxBGColor = this.targetSelectorBox.css('background-color');
  // Insert value to the target textbox. Send change event to kick saveCon. Animate color.
  this.targetSelectorBox.val(theValue).trigger('change').css('background-color', '#ffcc00');
  this.targetSelectorBox.animate({'backgroundColor':originalTextboxBGColor},1000,'linear'); // Don't chain.
  this.endXRay();
};

// Make an array of selector candidates as strings about given element (not jQuery object) and return it.
ixedit.xRay.processSelector = function(targetElement){
  var selectors = new Object();
  //var selectorArray = new Array();
  var hasIdOrClass = false; // Has ID or Class?
  selectors.theId = jQuery(targetElement).attr('id');
  selectors.theClass = jQuery(targetElement).attr('class');
  selectors.theTag = targetElement.tagName.toLowerCase();
  var selectorArray = new Array();
  if(selectors.theId){ // If ID exists.
    selectorArray[selectorArray.length] = selectors.theTag + '#' + selectors.theId;
    hasIdOrClass = true;
  };
  if(selectors.theClass){ // If class exists.
    var classesStr = selectors.theClass;
    classesStr = selectors.theTag + '.' + classesStr; // Add tag name and a dot to the front.
    var theDlmtr = ' ' + selectors.theTag + '.'; // Delimiter as a space plus tag name.
    classesStr = classesStr.replace(/ /g,theDlmtr); // Replace spaces with the delimiter.
    var classes = classesStr.split(' '); // Make an array.
    selectorArray = selectorArray.concat(classes);
    hasIdOrClass = true;
  };
  if(!hasIdOrClass){ // No ID No Class, give the tag name.
    selectorArray[selectorArray.length] = selectors.theTag;
  };
  return selectorArray;
};

// Get X-Ray targets.
ixedit.xRay.getXRayTargets = function(){
  var selectorBox = jQuery('#ixedit-xrayselectorbox');
  var xRayedBox = jQuery('#ixedit-xrayedbox');
  var guideBox = jQuery('#ixedit-xrayguidebox');
  var ixeditDialog = jQuery('#ixedit-dialog-main');
  var ixeditWrapper = jQuery('#ixedit-wrapper');

  var xRayTargets = jQuery('*').add(jQuery('body')).not(jQuery('window')).not(xRayedBox).not(selectorBox).not(jQuery('*', selectorBox)).not(guideBox).not(jQuery('*', guideBox)).not(ixeditDialog).not(jQuery('*', ixeditDialog).not(ixeditWrapper));
  return xRayTargets;
};

// End X-Ray.
ixedit.xRay.endXRay = function(){

  xRayTargets = this.getXRayTargets();

  // Unbind all functions bound by startXRay.
  xRayTargets.off('mousedown', this.xRayMouseDown);
  xRayTargets.off('mouseover', this.returningFalse);
  xRayTargets.off('mousemove', this.fadingOut);
  xRayTargets.off('mouseenter', this.returningFalse);
  xRayTargets.off('mouseout', this.returningFalse);
  xRayTargets.off('mouseleave', this.returningFalse);
  xRayTargets.off('click', this.returningFalse);
  xRayTargets.off('mouseover', this.cursorDefault);
  jQuery('#ixedit-xrayedbox').off('mousedown', this.returningFalse);

  jQuery('#ixedit-xrayselectorbox').remove(); // Remove xrayselectorbox.
  jQuery('#ixedit-xrayedbox').remove(); // Remove xrayedbox
  jQuery('#ixedit-xrayguidebox').remove(); // Remove xrayguidebox

  this.avoiding = false;

  jQuery(window).off('keydown', ixedit.xRay.onEsc); // Unbind Esc function.
  //FIXME: ixedit.positDialogMain(); // Post dialog
  jQuery('#ixedit-wrapper').show();
  jQuery('#ixedit-dialog-main').show();
  jQuery('#ixedit-ui').scrollTop(ixedit.xRay.dialogScrollTop); // For Safari bug

};



// X-Ray mousedown.
ixedit.xRay.xRayMouseDown = function(theEvent){
  if(ixedit.xRay.avoiding){
    return false;
  } else {
    // Do nothing.
  };

  jQuery('#ixedit-xrayselectorbox').hide();

  ixedit.xRay.theSelectors.length = 0; // Initialize selector candidate array.
  var currentElement = this; // Clicked element.
  var parentElements = jQuery(this).parents(); // Get parents.
  ixedit.xRay.theSelectors = ixedit.xRay.theSelectors.concat(ixedit.xRay.processSelector(currentElement)); // Get selector candidates and make an array.
  parentElements.each(function(){ // For each parent.
    var parentElement = this;
    ixedit.xRay.theSelectors = ixedit.xRay.theSelectors.concat(ixedit.xRay.processSelector(parentElement)); // Get selector candidates and add them to the array.
  });
  ixedit.xRay.theSelectors[ixedit.xRay.theSelectors.length]='window';
  ixedit.xRay.showTheX(jQuery(currentElement));
  ixedit.xRay.showSelectors(ixedit.xRay.theSelectors, theEvent);

  jQuery('#ixedit-xrayedbox').show();
  jQuery('#ixedit-xrayselectorbox').show();

  return false;
};

// X-Ray returning false.
ixedit.xRay.returningFalse = function(){
  return false;
};

// X-Ray fading out.
ixedit.xRay.fadingOut = function(){
  jQuery('#ixedit-xrayedbox').fadeOut(500);
};

// X-Ray cursor default.
ixedit.xRay.cursorDefault = function(){
  jQuery(this).css('cursor', 'default');
};




// X-Ray start xray.
ixedit.xRay.startXRay = function(targetSelectorBox){

  ixedit.xRay.dialogScrollTop = jQuery('#ixedit-ui').scrollTop(); // For Safari bug.
  jQuery('#ixedit-dialog-main').hide();
  jQuery('#ixedit-wrapper').hide();

  jQuery(window).on('keydown', ixedit.xRay.onEsc);

  this.targetSelectorBox = targetSelectorBox;

  var selectorBox = jQuery('<div id="ixedit-xrayselectorbox" class="ixedit-dialog"><div id="ixedit-selectorcontent"><ul id="ixedit-selectormenu"></ul></div><div id="ixedit-selectorarrow">&nbsp;</div></div>');
  var theX = jQuery('<div id="ixedit-xrayedbox">&nbsp;</div>');
  var guideBox = jQuery('<div id="ixedit-xrayguidebox"><p>' + ixedit.label.instructionXRay1 + ' <button class="ixedit-xraycancel" onclick="ixedit.xRay.endXRay(); return false;" title="' + ixedit.label.cancel +  '">&nbsp;</button></p></div>');

  var pageWidth = jQuery('html').innerWidth();

  selectorBox.hide();
  theX.hide();

  if(pageWidth>0){
    guideBox.css('left', pageWidth/2-220 + 'px');
  };

  selectorBox.appendTo(jQuery('body'));
  theX.appendTo(jQuery('body'));
  guideBox.appendTo(jQuery('body'));
  jQuery('#ixedit-xrayguidebox').css('position', 'fixed');
  jQuery('#ixedit-xrayguidebox').css('top', '50px');
  guideBox.draggable({
    start: function(){
      if(jQuery.browser.safari){ // Behavior of dragging fixed element is different in Safari.
        jQuery('#ixedit-xrayguidebox').css('position', 'absolute');
      };
    }
  });

  jQuery('.ixedit-xraycancel').mousedown(function(){jQuery(this).addClass('ixedit-xraycancel-pushed')}).mouseout(function(){jQuery(this).removeClass('ixedit-xraycancel-pushed')});

  var xRayTargets = this.getXRayTargets();

  xRayTargets.on('mousedown', this.xRayMouseDown);
  xRayTargets.on('mouseover', this.returningFalse);
  xRayTargets.on('mousemove', this.fadingOut);
  xRayTargets.on('mouseenter', this.returningFalse);
  xRayTargets.on('mouseout', this.returningFalse);
  xRayTargets.on('mouseleave', this.returningFalse);
  //xRayTargets.on('mouseup', this.returningFalse); // If you do this, you cannot stop dragging.
  xRayTargets.on('click', this.returningFalse);
  xRayTargets.on('mouseover', this.cursorDefault);
  jQuery('#ixedit-xrayedbox').on('mousedown', this.returningFalse);
  
  guideBox.on('mousedown', function(){
    ixedit.xRay.avoiding = true;
  });
  guideBox.on('mouseout', function(){
    ixedit.xRay.avoiding = false;
  });

  jQuery('#ixedit-xraycancel').on('mousedown', function(){return false});
};



// The Time Machine!
ixedit.preBufferOriginal = function(){
  this.lostWorld = jQuery('<div>' + jQuery('body').html() + '</div>');
  //this.lostWorld = jQuery('<rosetta>' + jQuery('body').html() + '</rosetta>');
};




// Make Main Dialog Base
ixedit.makeDialogBase = function(){
  var label = this.label;
  // Make a div block named ixedit-ui on the very top of the page, then insert input controls to it.
  jQuery('<div id="ixedit-ui" title="IxEdit"><div id="ixedit-inputbox"><div id="ixedit-basic"><table id="ixedit-basictitle"><tr><td class="unchian-disclosurearea-basic"><button class="disclosure_triangle">&nbsp;</button></td><td class="ixedit-titlearea-basic">' + label.inputHeaderUseracton + '</td><td class="ixedit-titlestatusarea-basic">&nbsp;</td></tr></table><div id="ixedit-basicitems"></div></div><div id="ixedit-action"><table id="ixedit-actiontitle"><tr><td class="unchian-disclosurearea-action"><button class="disclosure_triangle">&nbsp;</button></td><td class="ixedit-titlearea-action">' + label.inputHeaderSystemfeedback + '</td><td class="ixedit-titlestatusarea-action">&nbsp;</td></tr></table><div id="ixedit-actionitems"></div></div><div id="ixedit-condition"><table id="ixedit-conditiontitle"><tr><td class="unchian-disclosurearea-condition"><button class="disclosure_triangle">&nbsp;</button></td><td class="ixedit-titlearea-condition">' + label.inputHeaderCondition + '</td><td class="ixedit-titlestatusarea-condition">&nbsp;</td></tr></table><div id="ixedit-conditionitems"></div></div><div id="ixedit-cmnt"><table id="ixedit-commenttitle"><tr><td class="unchian-disclosurearea-comment"><button class="disclosure_triangle">&nbsp;</button></td><td class="ixedit-titlearea-comment">' + label.inputHeaderComment + '</td><td class="ixedit-titlestatusarea-comment">&nbsp;</td></tr></table><div id="ixedit-commentitems"></div></div></div></div>').prependTo(jQuery('body'));
  // Insert ix list to the top of ixedit-ui.
  jQuery('<div id="ixlist" style="display: none"><div id="ixedit-listheader"><table class="ixedit-table ixedit-table-header"></table></div><div id="ixedit-listbody"><table class="ixedit-table ixedit-table-body"></table></div></div>').prependTo(jQuery('#ixedit-ui'));
  jQuery('<div id="ixedit-utility"><button id="ixedit-routebtn" title="' + label.tipRouteBtn + '">&nbsp;</button><div id="ixedit-routemenu"><ul><li id="ixedit-showAbout">' + label.utilityAbout + '</li><li id="ixedit-showImport">' + label.utilityImport + '</li><li id="ixedit-showExport">' + label.utilityExport + '</li><li id="ixedit-showDeploy">' + label.utilityDeploy + '</li><li id="ixedit-showJson" style="display: none;">' + label.utilityShowJson + '</li></ul></div><p><span id="ixedit-utilitynoofitems">0</span> , <span id="ixedit-utilitynoofselected">0</span></p></div>').prependTo(jQuery('#ixedit-ui'));
  jQuery('<div id="ixedit-wrapper"></div>').appendTo(jQuery('body'));
};

// Generate the Main Dialog.
ixedit.generateDialogMain = function(){
  var label = this.label;
  jQuery('#ixedit-ui').dialog({
    closeOnEscape: false,
    width: this.commonPrefs.inspectorWidth, // Use this to make the dialog width resizable.
    //maxWidth: 530, // Comment this out to make the dialog width resizable.
    minWidth: 530,
    height: this.commonPrefs.inspectorHeight,
    modal: false,
    resizable: true,
    dialogClass: 'ixedit-dialog ixedit-dialog-main',
    buttons: {
      "0": function() { // Add New
        ixedit.addNewIx();
      },
      "1": function() { // Duplicate
        ixedit.duplicate(); // Argument: duplicating? (boolean)
      },
      "2": function() { // Delete
        var targetIxNos = new Array();
        var selectedLineNos = ixedit.prefs.selectedLineNo;
        var selectedLineNosLength = selectedLineNos.length;
        for(var i=0; i<selectedLineNosLength; i++){
          targetIxNos[i] = ixedit.listItems[selectedLineNos[i]].no;
        };
        if(selectedLineNosLength<2) {
          var theMessage = label.alertDeletingItem1;
        } else {
          var theMessage = label.alertDeletingItem2 + selectedLineNosLength + label.alertDeletingItem3;
        };
        if(window.confirm(theMessage)){
          ixedit.deleteIx(targetIxNos);
        };
        ixedit.showIxlist(); // This is needed to enable/disable buttons
      },
      "3": function() { // Reload
        ixedit.updatePrefsDataAndReload();
      },
      "4": function() { // Edit
        if(ixedit.prefs.selectedLineNo.length>0){
          var targetIxNo = ixedit.listItems[ixedit.prefs.selectedLineNo[0]].no;
          var targetIx = ixedit.ixs[targetIxNo];
          ixedit.bufferIx(targetIx); // Buffer the ix to be edited.
          ixedit.refreshIxInputBox(targetIx); // Refresh input controls.
          ixedit.showIxinputbox(); // Show Edit view.
        };
      },
      "5": function() { // Cancel
        ixedit.addingNewIx = false; // addingNewIx flag down.
        // Cancel is pushed only when a new ix is being created.
        // So the target ix instance must be this.ixs[this.ixs.length-1].
        // Unbind and delete it.
        ixedit.deleteIx([ixedit.ixs.length-1]);
        ixedit.refreshListButtonStates();
        if(ixedit.ixs.length > 0){
          ixedit.showSelectedItem(); // This is for clearing input values.
        };
        ixedit.showIxlist();
      },
      "6": function() { // Reset
        ixedit.resetIxInputBox();
      },
      "7": function() { //Done and Reload
        if(ixedit.ixs.length > 0){ // If there is an ix.
          ixedit.saveCon(false); // Reflect (save) it to ixs. ( No bindnig)

          // Update list and highlight.
          if(ixedit.addingNewIx){ // If adding new.
            var targetIxNo = ixedit.ixs.length-1; // targetIxNo is the number of ixs items.
          } else { // If rewriting.
            var selectedLineNos = ixedit.prefs.selectedLineNo;
            var targetIxNo = ixedit.listItems[selectedLineNos[selectedLineNos.length-1]].no; // Get the target ix number to rewrite.
          };
          ixedit.prepareList();
          ixedit.prefs.selectedLineNo.length = 1;
          ixedit.prefs.selectedLineNo[0] = ixedit.getListItemNo(targetIxNo); // update selectedLineNo.
        };
        ixedit.updateIxDataAndReload(); // Save DB and reload.
      },
      "8": function() { // Done
        ixedit.save();
        ixedit.addingNewIx = false; // Flag down.
      }
    },
    open:
      function(){

        var theDialog = jQuery('.ixedit-dialog-main');
        theDialog.attr('id', 'ixedit-dialog-main'); // Give an ID to this dialog.
        var ixeditUi = jQuery('#ixedit-ui');
        var ixeditTitlebar = jQuery('.ui-dialog-titlebar', theDialog);
        var ixeditButtonPane = jQuery('.ui-dialog-buttonpane', theDialog);
        var buttons = jQuery('button', ixeditButtonPane);

        // Positioning. Using .position command doesnt work well for Safari when scrolled and reloaded, so use css.
        ixedit.positDialogMain();

        theDialog.draggable('option', 'containment', '#ixedit-wrapper').draggable('option', 'scroll', false);

        jQuery(window).scroll(function(){
          // TODO
        });

        // Bind titlebar double-clicking.
        ixeditTitlebar.dblclick(function(){
          ixeditUi.toggle();
          ixeditButtonPane.toggle();
          jQuery('.ui-resizable-handle', theDialog).toggle();
          var thePosition = theDialog.position();
          if(ixeditUi.is(':hidden')){
            ixedit.commonPrefs.inspectorShaded = true; // If shaded.
            // Centering ( width of shaded is 100).
            var theLeft = thePosition.left + ((ixedit.commonPrefs.inspectorWidth-100)*0.5);
            theDialog.css('left', theLeft + 'px');
          } else {
            ixedit.commonPrefs.inspectorShaded = false; // If opened.
            // Centering ( width of shaded is 100).
            var theLeft = thePosition.left - ((ixedit.commonPrefs.inspectorWidth-100)*0.5);
            theDialog.css('left', theLeft + 'px');
          };
          theDialog.toggleClass('ixedit-dialog-shaded');
          //ixedit.updatePrefsData(); // Save DB
        });

        // Give IDs and labels to buttons.
        jQuery(buttons[0]).attr('id', 'ixedit-button-new').text(label.mainButtonNew);
        jQuery(buttons[1]).attr('id', 'ixedit-button-duplicate').text(label.mainButtonDuplicate);
        jQuery(buttons[2]).attr('id', 'ixedit-button-delete').text(label.mainButtonDelete);
        jQuery(buttons[3]).attr('id', 'ixedit-button-reload').text(label.mainButtonReload);
        jQuery(buttons[4]).attr('id', 'ixedit-button-edit').text(label.mainButtonEdit);
        jQuery(buttons[5]).attr('id', 'ixedit-button-cancel').text(label.mainButtonCancel);
        jQuery(buttons[6]).attr('id', 'ixedit-button-reset').text(label.mainButtonReset);
        jQuery(buttons[7]).attr('id', 'ixedit-button-doneandreload').text(label.mainButtonDoneReload);
        jQuery(buttons[8]).attr('id', 'ixedit-button-done').text(label.mainButtonDone);

        // Button effects.
        buttons.mousedown(function(){jQuery(this).addClass('ixedit-pushed')}).mouseup(function(){jQuery(this).removeClass('ixedit-pushed')}).mouseout(function(){jQuery(this).removeClass('ixedit-pushed')});

        // Bind each area titles clicking.
        var disclosingTargets = new Array();
        disclosingTargets[0] = new Object();
        disclosingTargets[0].wrapper = jQuery('#ixedit-basic');
        disclosingTargets[0].container = jQuery('#ixedit-basicitems');
        disclosingTargets[1] = new Object();
        disclosingTargets[1].wrapper = jQuery('#ixedit-action');
        disclosingTargets[1].container = jQuery('#ixedit-actionitems');
        disclosingTargets[2] = new Object();
        disclosingTargets[2].wrapper = jQuery('#ixedit-condition');
        disclosingTargets[2].container = jQuery('#ixedit-conditionitems');
        disclosingTargets[3] = new Object();
        disclosingTargets[3].wrapper = jQuery('#ixedit-cmnt');
        disclosingTargets[3].container = jQuery('#ixedit-commentitems');


        jQuery('#ixedit-basictitle').click(function(){
          var theWrapper = disclosingTargets[0].wrapper;
          var theContainer = disclosingTargets[0].container;
          ixedit.areaGimmick(0, ixeditUi, theWrapper, theContainer);
        });
        var basicTitle = jQuery('#ixedit-basictitle');
        basicTitle.mousedown(function(){jQuery('tr', basicTitle).addClass('ixedit-pushed')}).mouseup(function(){jQuery('tr', basicTitle).removeClass('ixedit-pushed')}).mouseout(function(){jQuery('tr', basicTitle).removeClass('ixedit-pushed')});

        jQuery('#ixedit-actiontitle').click(function(){
          var theWrapper = disclosingTargets[1].wrapper;
          var theContainer = disclosingTargets[1].container;    
          ixedit.areaGimmick(1, ixeditUi, theWrapper, theContainer);
        });
        var actionTitle = jQuery('#ixedit-actiontitle');
        actionTitle.mousedown(function(){jQuery('tr', actionTitle).addClass('ixedit-pushed')}).mouseup(function(){jQuery('tr', actionTitle).removeClass('ixedit-pushed')}).mouseout(function(){jQuery('tr', actionTitle).removeClass('ixedit-pushed')});

        jQuery('#ixedit-conditiontitle').click(function(){
          var theWrapper = disclosingTargets[2].wrapper;
          var theContainer = disclosingTargets[2].container;    
          ixedit.areaGimmick(2, ixeditUi, theWrapper, theContainer);
        });
        var conditionTitle = jQuery('#ixedit-conditiontitle');
        conditionTitle.mousedown(function(){jQuery('tr', conditionTitle).addClass('ixedit-pushed')}).mouseup(function(){jQuery('tr', conditionTitle).removeClass('ixedit-pushed')}).mouseout(function(){jQuery('tr', conditionTitle).removeClass('ixedit-pushed')});

        jQuery('#ixedit-commenttitle').click(function(){
          var theWrapper = disclosingTargets[3].wrapper;
          var theContainer = disclosingTargets[3].container;
          if(theWrapper.hasClass('ixedit-hidden')==false){ // If the area is visible.
            theWrapper.addClass('ixedit-hidden'); // Hide.
            if(ixedit.gimmickAnimation){
              theContainer.slideUp('fast');
            }else{
              theContainer.hide();
            };
            ixedit.commonPrefs.areasShown[3] = false;
          } else { // If hidden.
            theWrapper.removeClass('ixedit-hidden'); // Show
            if(ixedit.gimmickAnimation){
              theContainer.slideDown('fast', function(){jQuery('#ixedit-comment').focus()});
            }else{
              theContainer.show();
              jQuery('#ixedit-comment').focus(); // Focus.
            };
            ixedit.resizeCommentHeight();
            ixedit.commonPrefs.areasShown[3] = true;
          };
          //ixedit.updatePrefsData(); // Save DB.
        });
        var commentTItle = jQuery('#ixedit-commenttitle');
        commentTItle.mousedown(function(){jQuery('tr', commentTItle).addClass('ixedit-pushed')}).mouseup(function(){jQuery('tr', commentTItle).removeClass('ixedit-pushed')}).mouseout(function(){jQuery('tr', commentTItle).removeClass('ixedit-pushed')});

        // Routing menu binding.
        var routeMenu = jQuery('#ixedit-routemenu');
        jQuery('#ixedit-routebtn').mousedown(function(){jQuery(this).addClass('ixedit-pushed')}).mouseup(function(){jQuery(this).removeClass('ixedit-pushed')}).mouseout(function(){jQuery(this).removeClass('ixedit-pushed')}).click(function(){routeMenu.toggle(); return false; });
        jQuery('li', routeMenu).hover(function(){jQuery(this).addClass('ixedit-selected')}, function(){jQuery(this).removeClass('ixedit-selected')});
        jQuery('body').click(function(){routeMenu.hide()});
        jQuery('#ixedit-showAbout').click(function(){ixedit.showAbout();});
        jQuery('#ixedit-showImport').click(function(){ixedit.showImport();});
        jQuery('#ixedit-showExport').click(function(){ixedit.showExport();});
        jQuery('#ixedit-showDeploy').click(function(){ixedit.showDeploy();});
        jQuery('#ixedit-showJson').click(function(){ixedit.showJSON();});
        jQuery('#ixedit-showDb').click(function(){ixedit.showDB();});


        // Initial opening or closing about each area.
        function setAreaDisclosure(targets) {
          var thePrefs = ixedit.commonPrefs.areasShown;
          var targetsLength = targets.length;
          for(var i=0; i<targetsLength; i++){
            var theWrapper = targets[i].wrapper;
            var theContainer = targets[i].container;
            if(thePrefs[i]==false){
              theWrapper.addClass('ixedit-hidden');
              theContainer.hide();
            };
          };
        };
        setAreaDisclosure(disclosingTargets);


        ixedit.showIxlist(); // Show list view.

        ixedit.refreshListButtonStates();
        if(ixedit.ixs.length>0){ // If there is an ix.
          ixedit.showSelectedItem(); // Select one.
        };


        if(ixedit.commonPrefs.inspectorShaded == true){
          ixeditTitlebar.dblclick();
        };



      },
    resize:
      function(){
        if(!jQuery('#ixedit-ui').hasClass('ixedit-input')){
          ixedit.resizeTableWidth();
        };
        ixedit.resizeTableHeight();
        ixedit.resizeCommentHeight();
      },
    resizeStart:
      function(){
        // Do nothing.
      },
    resizeStop:
      function(){

        if(!jQuery('#ixedit-ui').hasClass('ixedit-input')){
          ixedit.resizeTableWidth();
        };

        var ixeditDialogMain = jQuery('#ixedit-dialog-main');
        ixedit.commonPrefs.inspectorWidth = ixeditDialogMain.width();
        ixedit.commonPrefs.inspectorHeight = ixeditDialogMain.height();
        //ixedit.updatePrefsData(); // Save DB.
      },
    drag:
      function(){

      },
    dragStart:
      function(){
        var ixeditDialogMain = jQuery('#ixedit-dialog-main');
      },
    dragStop:
      function(){
        // Update position prefs
        ixedit.updatePositionPrefs();

        //ixedit.updatePrefsData(); // Save DB.
      }
  });

};

// DB General Interfaces
ixedit.updateFullData = function(){
  var dbi = ixedit.dbi;
  // dbi.checkCommonRecord(db, dbi.sqlUpdateCommonPrefs);
  // dbi.checkPageRecord(db, dbi.sqlUpdateIx);
  dbi.saveIxData();
};

ixedit.updatePrefsDataAndReload = function(){
  var dbi = ixedit.dbi;
  dbi.saveIxData();
  window.location.reload();
};

// Save DB fully, then reload. ( This is for Done and Reload button. )
ixedit.updateIxDataAndReload = function(){
  var dbi = ixedit.dbi;
  dbi.saveIxData();
  window.location.reload();
};

// Prepare IxEdit Dialog.
ixedit.prepareEditor = function(){
  // If no screen ID specified in the HTML, use current URL as screen ID.
  if(!this.screenID || this.screenID == ''){
    var locationString = location.href;
    var theFirstSharpIndex = locationString.indexOf('#');
    if(theFirstSharpIndex > -1){ // If the URL has a sharp.
      var locationString = locationString.substring(0, theFirstSharpIndex); // Ignore the sharp.
    };
    this.screenID = locationString;
  };

  window.onbeforeunload = function () {
    if(ixedit.modified) { // If modified flag is up.
      return ixedit.label.unloadingCaution;
    };
  };

};

// Add Source to array
ixedit.addEmbedSource = function(source){
  var embedSources = ixedit.embedSources;
  embedSources[embedSources.length] = source;
};

// ********** Local Database Interfaces **********
ixedit.localdbi.dbInit = function(dbName){
    // if(window.openDatabase){
    //     if(ixedit.db){ // If ixedit.db is defined.
    //         // Do nothing.
    //     } else { // If not.
    //         ixedit.db = openDatabase(dbName, '1.0', 'ixedit local database', 512000); // Define.
    //     };
    //     return ixedit.db;
    // } else {
    //     window.alert('IxEdit Error: There is no local client-side database storage.');
    // };
    return 
};
ixedit.localdbi.checkCommonRecord = function(db, nextFunction, callbackFunction){

    db.transaction(
        function(tx) {
            var sql = 'CREATE TABLE IF NOT EXISTS ' + ixedit.applicationName + ' (' + 'id integer primary key autoincrement,' + 'commonprefs text not null' + ')';
            tx.executeSql(
                sql,
                [],
                function(tx, rs){
                    var sql = 'SELECT COUNT(*) FROM ' + ixedit.applicationName + ' WHERE id = ?';
                    tx.executeSql(
                        sql,
                        [1],
                        function(tx, rs){
                            var numberOfRecords = rs.rows.item(0)['COUNT(*)'];
                            if(numberOfRecords > 0){ // If there is commonPrefs data.
                                nextFunction(db, tx); // Next function.
                            } else { // If there is no commonPrefs data, insert a record.
                                var commonPrefsData = JSON.stringify(ixedit.commonPrefs);
                                var escapedJsonString = escape(commonPrefsData);
                                var sql = 'INSERT INTO ' + ixedit.applicationName + ' (commonprefs) VALUES (?)';
                                tx.executeSql(
                                    sql,
                                    [escapedJsonString],
                                    function(tx, rs){ // Load commonPrefs data.
                                        nextFunction(db, tx); // Next function.
                                    }
                                )
                            };
                        }
                    )
                }
            )
        },
        function(error) { // Function as the second argument.
                window.alert('IxEdit Error: checkCommonRecord: ' + error.message);
        },
        function(){ // Callback for the succeeded case.
            if(callbackFunction){
                callbackFunction();
            };
        }
    )
};

// Local DB read db common data. This is called by checkCommonRecord when loaded.
ixedit.localdbi.readDbCommonData = function(db, tx){
    var sql = 'SELECT ' + 'commonprefs' +' FROM ' + ixedit.applicationName + ' where id = ?';
    tx.executeSql(
        sql,
        [1],
        function(tx, rs){
            var commonPrefsString = rs.rows.item(0)['commonprefs'];
            if(commonPrefsString){
                commonPrefsString = unescape(commonPrefsString);
            }else{
                commonPrefsString = '';
            };
            ixedit.loadCommonPrefsJsonString(commonPrefsString);
            ixedit.dbi.checkPageRecord(db, ixedit.dbi.readDbIxData);
        }
    )
};

// Loca DB check page record.
ixedit.localdbi.checkPageRecord = function(db, nextFunction, callbackFunction, nextFunctionArg){
    db.transaction(
        function(tx) {
            var sql = 'CREATE TABLE IF NOT EXISTS ' + ixedit.projectName + ' (' + 'id integer primary key autoincrement,' + 'screenid text not null,' + 'ixdata text not null,' + 'prefs text' + ')';
            tx.executeSql(
                sql,
                [],
                function(tx, rs){
                    var sql = 'SELECT COUNT(*) FROM ' + ixedit.projectName + ' WHERE screenid = ?';
                    tx.executeSql(
                        sql,
                        [ixedit.screenID],
                        function(tx, rs){
                            var numberOfRecords = rs.rows.item(0)['COUNT(*)'];
                            if(numberOfRecords > 0){ // If there is data.
                                nextFunction(db, tx, nextFunctionArg); // Next function.
                            } else { // If there is no data, insert a record.
                                var ixData = '{"format":"' + ixedit.format + '", "data":""}';
                                var escapedJsonString = escape(ixData);
                                var sql = 'INSERT INTO ' + ixedit.projectName + ' (screenid,ixdata,prefs) VALUES (?,?,?)';
                                tx.executeSql(
                                    sql,
                                    [ixedit.screenID, escapedJsonString, ''],
                                    function(tx, rs){ // Load data.
                                        // Show IxEdit Dialog.
                                        nextFunction(db, tx, nextFunctionArg); // Next function.
                                    }
                                )
                            };
                        }
                    )
                }
            )
        },
        function(error) { // Function as the second argument.
            window.alert('IxEdit Error: Loading data failed. \ncheckPageRecord: ' + error.message);
        },
        function(){ // Callback for the succeeded case.
            if(callbackFunction){
                callbackFunction();
            };
        }
    )
};

// Local DB sql update ix.
ixedit.localdbi.sqlUpdateIx = function(db, tx){
    var jsonString = ixedit.encodeIxsJSON(ixedit.ixs); // ixs to JSON.
    var escapedJsonString = escape(jsonString); // Escape.
    var prefsString = JSON.stringify(ixedit.prefs); // prefs to JSON.
    var escapedPrefsString = escape(prefsString); // Escape.
    var ixSql = 'UPDATE ' + ixedit.projectName + ' SET ixdata = ?, prefs = ? where screenid = ?'; // Data from one screen.

    tx.executeSql(
        ixSql,
        [escapedJsonString, escapedPrefsString, ixedit.screenID],
        function(tx, rs){
            ixedit.modified = false; // modified flag down.
        }
    )
};

// Local DB sql update ix prefs.
ixedit.localdbi.sqlUpdateIxPrefs = function(db, tx){
    var prefsString = JSON.stringify(ixedit.prefs); // prefs to JSON.
    var escapedPrefsString = escape(prefsString); // Escape.
    var ixSql = 'UPDATE ' + ixedit.projectName + ' SET prefs = ? where screenid = ?'; // Data from one screen.
    tx.executeSql(
        ixSql,
        [escapedPrefsString, ixedit.screenID],
        function(tx, rs){
        }
    )
};

ixedit.localdbi.sqlUpdateCommonPrefs = function(db, tx){
    var commonPrefsString = JSON.stringify(ixedit.commonPrefs); // prefs to JSON.
    var escapedCommonPrefsString = escape(commonPrefsString); // Escape.
    var commonSql = 'UPDATE ' + ixedit.applicationName + ' SET commonprefs = ? where id = ?'; // commonPrefs.
    tx.executeSql(
        commonSql,
        [escapedCommonPrefsString, 1],
        function(tx, rs){
        }
    )
};

// Save jsonString to localstorage. TMP
ixedit.localdbi.saveIxData = function(){
  var jsonString = ixedit.encodeIxsJSON(ixedit.ixs); // ixs to JSON.
  try {
    localStorage.setItem('ixedit-cache', jsonString);
  } catch(a) {
    return false;
  }
};

// Initialize.
ixedit.initialize = function(){
  this.preBufferOriginal();
  this.preAssignSelectOptions(); // Pre-assign select options.
  this.preAssignCmds(); // Pre-assign commands.
  this.preAssignCondCmds(); // Pre-assign condition commands.
  this.preGenerateEvtList(); // Pre-generate event list.
  this.preGenerateCmdList(); // Pre-generate command list.
  this.preGenerateCondCmdList(); // Pre-generate condition command list.
  this.prepareEditor(); // Prepare IxEdit Dialog.
};


// ---------- Original Prototype for Number Sorting
// This is to sort an array handling values as numbers, not strings.
Array.prototype.ixeditSortByNumber = function() {
  this.sort(function(a, b) {
    return (parseInt(a) > parseInt(b)) ? 1 : -1;
  });
};



// VERY FIRST INITIALIZATION
jQuery(function(){
  if(!ixedit.deployed){
    ixedit.initialize();
    ixedit.makeDialogBase()
    ixedit.generateDialogMain();
  };
  if (localStorage.getItem('ixedit-cache') != null){
    ixedit.importData(localStorage.getItem('ixedit-cache'));
  }
});


}; // End of if(ixedit.boot()) 
