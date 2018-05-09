/*
 * jQuery v1.9.1 included
 */

//提取url
String.prototype.httpHtml = function(){
	var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
	return this.replace(reg, '<a href="$1$2" target="_blank">$1$2</a>');
};

$(document).ready(function() {

  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  //占位符设置
  $("#request_custom_fields_114103142391").change(function(){
    $(this).parents(".form-field").find("pre").remove();
    var val = $(this).val();
    var urls = "";
    switch(val){
      case "token_deposit_missing":
        	urls = $("#qt_deposit_missing-t1").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
          break;
      case "how_to_deposit":
        	urls = $("#qt_how_to_deposit").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "sent_to_wrong_address":
        	urls = $("#qt_sent_to_wrong_address").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "sent_wrong_coin":
        	urls = $("#qt_sent_wrong_coin").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "deposit_forgot_or_wrong_tag_memo_paymentid":
        	urls = $("#qa_deposit_forgot_or_wrong_tag_memo_paymentid").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "fiat_currency_deposit":
        	urls = $("#qt_how_to_deposit_fiat_currency").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      default:
        	$(this).parents(".form-field").find("pre").remove();
    };
  });
  
  $("#request_custom_fields_114103061412").change(function(){
    $(this).parents(".form-field").find("pre").remove();
    var val = $(this).val();
    var urls = "";
    switch(val){
      case "token_withdrawal_missing":
        	urls = $("#qt_withdrawal_missing").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
          break;
      case "not_receiving_confirmation_email":
        	urls = $("#qt_not_receiving_confirmation_email").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "how_to_withdraw":
        	urls = $("#qt_how_to_withdraw").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "withdrawing_to_wrong_address":
        	urls = $("#qt_withdraw_to_wrong_address").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "withdraw_forgot_or_wrong_tag_memo_paymentid":
        	urls = $("#qt_forget_or_wrong_tag_memo_paymentid").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      default:
        	$(this).parents(".form-field").find("pre").remove();
    };
  });
  
  $("#request_custom_fields_114103440091").change(function(){
    $(this).parents(".form-field").find("pre").remove();
    var val = $(this).val();
    var urls = "";
    switch(val){
      case "order_not_filled":
        	urls = $("#qt_trade-order_exceptions").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
          break;
      case "how_to_exchange":
        	urls = $("#qt_how_to_trade").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "trade_issue_other_issue":
        	urls = $("#qt_other_trade_issue").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "small_balances_convert_to_bnb":
        	urls = $("#qt_small_balances_convert_to_bnb").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      default:
        	$(this).parents(".form-field").find("pre").remove();
    };
  });
  
  $("#request_custom_fields_114103533131").change(function(){
    $(this).parents(".form-field").find("pre").remove();
    var val = $(this).val();
    var urls = "";
    switch(val){
      case "disable_sm2fa":
        	urls = $("#qt_disable_sms_auth_by_customer").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
          break;
      case "sms-not_receive_code":
        	urls = $("#qt_not_receive_code").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      default:
        	$(this).parents(".form-field").find("pre").remove();
    };
  });
  
  $("#request_custom_fields_114103243451").change(function(){
    $(this).parents(".form-field").find("pre").remove();
    var val = $(this).val();
    var urls = "";
    switch(val){
      case "unlock_account":
        	urls = $("#qt_unlock_account").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
          break;
      case "freeze_account":
        	urls = $("#qt_how_to_freeze_account").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "change_account_email":
        	urls = $("#qt_how_to_change_account_email").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "kyc_issue":
        	urls = $("#qt_account_verification_level_2_verification").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "raise_withdrawal_limit":
        	urls = $("#qt_increase_withdrawal_limit").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "corporate_account_application":
        	urls = $("#qt_corporate_account_application").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      default:
        	$(this).parents(".form-field").find("pre").remove();
    };
  });
  
  $("#request_custom_fields_114103647951").change(function(){
    $(this).parents(".form-field").find("pre").remove();
    var val = $(this).val();
    var urls = "";
    switch(val){
      case "genenal_questions":
        	urls = $("#qt_other_issue_general_questions").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
          break;
      case "apply_for_coin_listing":
        	urls = $("#qt_other_issue_apply_for_coin_listing").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      default:
        	$(this).parents(".form-field").find("pre").remove();
    };
  });
  
  $("#request_custom_fields_360002417251").change(function(){
    $(this).parents(".form-field").find("pre").remove();
    var val = $(this).val();
    var urls = "";
    switch(val){
      case "referrals_issue":
        	urls = $("#qt_promotions_referrals").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
          break;
      case "promotions_others":
        	urls = $("#qt_other_promotion_issue").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      default:
        	$(this).parents(".form-field").find("pre").remove();
    };
  });
  
  $("#request_custom_fields_114103177891").change(function(){
    $(this).parents(".form-field").find("pre").remove();
    var val = $(this).val();
    var urls = "";
    switch(val){
      case "disable_google2fa":
        	urls = $("#qt_disable_google_two-factor_2fa_by_yourself").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
          break;
      case "2fa_binding_failed":
        	urls = $("#qt_google_auth_2fa_binding_failed").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "how_to_2fa":
        	urls = $("#qt_how_to_enable_google_auth_2fa").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      default:
        	$(this).parents(".form-field").find("pre").remove();
    };
  });
  
  $("#request_custom_fields_360003423311").change(function(){
    $(this).parents(".form-field").find("pre").remove();
    var val = $(this).val();
    var urls = "";
    switch(val){
      case "app_issue_ios":
        	urls = $("#qt_client_issue_ios").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
          break;
      case "app_issue_android":
        	urls = $("#qt_client_issue_android").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "app_issue_pc":
        	urls = $("#qt_client_issue_pc").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      default:
        	$(this).parents(".form-field").find("pre").remove();
    };
  });
  
  $("#request_custom_fields_114103011492").change(function(){
    $(this).parents(".form-field").find("pre").remove();
    var val = $(this).val();
    var urls = "";
    switch(val){
      case "how_to_create_api":
        	urls = $("#qt_how_to_create_api").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
          break;
      case "api_increase_limit_orders":
        	urls = $("#qt_api_form_increase_limit_orders").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "__dc.api_form_exception__":
        	urls = $("#qt_api_exception").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      case "api_others":
        	urls = $("#qt_api_form_others_issue").html().httpHtml();
        	$(this).parents(".form-field").append(urls);
        	break;
      default:
        	$(this).parents(".form-field").find("pre").remove();
    };
  });
  
  $("#request_custom_fields_114103135371").blur(function(){
    $(this).parents(".form-field").find("pre").remove();
    var val = $(this).val();
    if(val.toLowerCase() == "btc" || val.toLowerCase() == "bitcoin" || val == "比特币"){
       urls = $("#qt_deposit_missing-t2").html().httpHtml();
       $(this).parents(".form-field").append(urls);
    }
    else if(val.toLowerCase() == "ethereum" || val.toLowerCase() == "eth" || val == "以太坊"){
       urls = $("#qt_deposit_missing-t2-eth_erc2_0").html().httpHtml();
       $(this).parents(".form-field").append(urls);     
    }
    else if(val.toLowerCase() == "usdt" || val == "泰达币"){
       urls = $("#qt_deposit_missing-t2-usdt").html().httpHtml();
       $(this).parents(".form-field").append(urls);     
    }
    else if(val.toLowerCase() == "iota"){
       urls = $("#qt_deposit_missing-t2-iota").html().httpHtml();
       $(this).parents(".form-field").append(urls);     
    }
    else if(val == ""){
       $(this).parents(".form-field").find("pre").remove();    
    }
    else{
       urls = $("#qt_deposit_missing-t2-others").html().httpHtml();
       $(this).parents(".form-field").append(urls);   
    }
  });
  
  //给用户email赋值
  $.get("/api/v2/users/me.json",function(res){
    if(res){
      if(res.user.id){
         $("#request_custom_fields_114103139491").val(res.user.email);
         $("#request_anonymous_requester_email").val(res.user.email);
      }else{
        $("#request_custom_fields_114103139491").blur(function(){
          if($(this).val() != ""){
             $("#request_anonymous_requester_email").val($(this).val());
          }else{
             $("#request_anonymous_requester_email").val("");
          }
        });
      }
    }
  })
  
  // show form controls when the textarea receives focus or backbutton is used and value exists
  var $commentContainerTextarea = $(".comment-container textarea"),
  $commentContainerFormControls = $(".comment-form-controls, .comment-ccs");

  $commentContainerTextarea.one("focus", function() {
    $commentContainerFormControls.show();
  });

  if ($commentContainerTextarea.val() !== "") {
    $commentContainerFormControls.show();
  }

  // Expand Request comment form when Add to conversation is clicked
  var $showRequestCommentContainerTrigger = $(".request-container .comment-container .comment-show-container"),
    $requestCommentFields = $(".request-container .comment-container .comment-fields"),
    $requestCommentSubmit = $(".request-container .comment-container .request-submit-comment");

  $showRequestCommentContainerTrigger.on("click", function() {
    $showRequestCommentContainerTrigger.hide();
    $requestCommentFields.show();
    $requestCommentSubmit.show();
    $commentContainerTextarea.focus();
  });

  // Mark as solved button
  var $requestMarkAsSolvedButton = $(".request-container .mark-as-solved:not([data-disabled])"),
    $requestMarkAsSolvedCheckbox = $(".request-container .comment-container input[type=checkbox]"),
    $requestCommentSubmitButton = $(".request-container .comment-container input[type=submit]");

  $requestMarkAsSolvedButton.on("click", function () {
    $requestMarkAsSolvedCheckbox.attr("checked", true);
    $requestCommentSubmitButton.prop("disabled", true);
    $(this).attr("data-disabled", true).closest("form").submit();
  });

  // Change Mark as solved text according to whether comment is filled
  var $requestCommentTextarea = $(".request-container .comment-container textarea");

  $requestCommentTextarea.on("keyup", function() {
    if ($requestCommentTextarea.val() !== "") {
      $requestMarkAsSolvedButton.text($requestMarkAsSolvedButton.data("solve-and-submit-translation"));
      $requestCommentSubmitButton.prop("disabled", false);
    } else {
      $requestMarkAsSolvedButton.text($requestMarkAsSolvedButton.data("solve-translation"));
      $requestCommentSubmitButton.prop("disabled", true);
    }
  });

  // Disable submit button if textarea is empty
  if ($requestCommentTextarea.val() === "") {
    $requestCommentSubmitButton.prop("disabled", true);
  }

  // Submit requests filter form in the request list page
  $("#request-status-select, #request-organization-select")
    .on("change", function() {
      search();
    });

  // Submit requests filter form in the request list page
  $("#quick-search").on("keypress", function(e) {
    if (e.which === 13) {
      search();
    }
  });

  function search() {
    window.location.search = $.param({
      query: $("#quick-search").val(),
      status: $("#request-status-select").val(),
      organization_id: $("#request-organization-select").val()
    });
  }

  $(".header .icon-menu").on("click", function(e) {
    e.stopPropagation();
    var menu = document.getElementById("user-nav");
    var isExpanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", !isExpanded);
  });

  if ($("#user-nav").children().length === 0) {
    $(".header .icon-menu").hide();
  }
  

  // Submit organization form in the request page
  $("#request-organization select").on("change", function() {
    this.form.submit();
  });

  // Toggles expanded aria to collapsible elements
  $(".collapsible-nav, .collapsible-sidebar").on("click", function(e) {
    e.stopPropagation();
    var isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
  });
  
  //login
  //var currentUrl=("https://www.binance.com/login.html?callback="+window.location.href+"&zendesk=zendesk");
  var currentUrl=("http://www.binance.com/login.html?callback="+window.location.href+"&zendesk=zendesk");
  var $loginA=$(".nav-wrapper a.login");
  $loginA.attr("href",currentUrl);
  $loginA.removeAttr("data-auth-action");
  
  //判斷是否登录
  var requestUrl=("http://www.binance.com/login.html?callback="+window.location.href+"/requests/new&zendesk=zendesk");
  var articleRequestUrl=("http://www.binance.com/login.html?callback="+window.location.href+"&zendesk=zendesk");
  //$(".submit-a-request").attr("href",requestUrl);
  $(".article-more-questions a").attr("href",articleRequestUrl);
  $.ajax({
    type: "get",
    url: "/api/v2/users/me/session.json",
    success: function (data) {
     var loginInfo=data["session"];
     if(loginInfo){
       //$(".submit-a-request").attr("href","/hc/zh-cn/requests/new");
       $(".article-more-questions a").attr("href","/hc/zh-cn/requests/new");

     }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
       $("#launcher").css("opacity","0");
      $("#Embed").css("display","none");
   	}
  });
  
  //编辑个人资料功能隐藏
  var userA=$("#user-menu a");
  userA.each(function(i){
    if($(this).attr("data-action")=="edit-profile"){
   		 console.log("success");
      $(this).css("display","none");
    }
  });
  
  
 	var locationUrl=window.location.href;
  if(locationUrl.indexOf("en-us")>-1){
		$(".submit-a-request").html("Submit Request");
  }
  if(locationUrl.indexOf("zh-cn")>-1){
  	$(".submit-a-request").html("提交工单");
  }
  
  
  
  
  
  
});