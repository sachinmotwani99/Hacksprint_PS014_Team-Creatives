function playAudio() { 
            audioEl.play(); 
        } 
        
        function pauseAudio() { 
            audioEl.pause(); 
        } 
  var audioEl = document.getElementById("audioEl");

         let track = [ 
  { 
    name: "Sohnes", 
    artist: "Miliind Gabba", 
    image: "https://res.cloudinary.com/dr8bvrnmw/image/upload/v1599113296/songs/hindi%20party%20songs/size_m_5_yt9zjf.jpg", 
    path: "https://res.cloudinary.com/dr8bvrnmw/video/upload/v1599025946/songs/Vaaste_-_Dhvani_Bhanushali_SongsMp3.Com_fm2luo.mp3"
  }, 
  { 
    name: "Khaab", 
    artist: "Akhil", 
    image: "https://a10.gaanacdn.com/images/albums/39/1867939/crop_175x175_1867939.jpg", 
    path: "https://res.cloudinary.com/dr8bvrnmw/video/upload/v1599026040/songs/01_Jogi_-_Shaadi_Mein_Zaroor_Aana_SongsMp3.Com_hpatm5.mp3"
  },
  { 
    name: "Enthusiast", 
    artist: "Tours", 
    image: "Image URL", 
    path: "Enthusiast.mp3"
  },
  { 
    name: "Enthusiast", 
    artist: "Tours", 
    image: "Image URL", 
    path: "Enthusiast.mp3"
  }, 
  { 
    name: "Shipping Lanes", 
    artist: "Chad Crouch", 
    image: "Image URL", 
    path: "Shipping_Lanes.mp3", 
  }, 
]; 

        function showSideMenu() {
            $("#homeScreen").animate({
                
            }, 400).addClass("sd");
            $("#sideMenu").animate({
                left: 0,
                opacity: 1
            }, 100);

            $("#menu").addClass('blur-in');
            $("#homeScreen").addClass('blur-in');
        }

        function hideSideMenu() {
            $("#homeScreen").animate({
                
            }, 400).removeClass("sd");
            $("#sideMenu").animate({
                left: 0 - $(document).width(),
                opacity: 0.2
            }, 100);

            $("#menu").removeClass('blur-in');
            $("#homeScreen").removeClass('blur-in');
        }

        function showHome() {

            $("#homeScreen").animate({ scrollTop: 0 }, 100);

            $("#homeScreen").animate({
                opacity: 1
            }, 400).addClass("sd");
            $("#musicScreen").animate({
                top: 1800,
                opacity: 0.2
            }, 400);

            $("#songName2").addClass("invisible");
            bottomToTop();
            
        }

        function showMusic() {

            $("#homeScreen").animate({ scrollTop: 0 }, 100);

            $("#homeScreen").animate({
                // opacity: 0.2
            }, 400).removeClass("sd");
            $("#musicScreen").animate({
                top: 50,
                opacity: 1
            }, 400);

            topToBottom();
            hideSideMenu();

        }

        function fadeEffect(el){

            $(el).animate({
                opacity: 0
            }, 200).animate({
                opacity: 1
            }, 200);

        }

        $("#closeSideMenu").on("click", function(){
            hideSideMenu();
        });

        $("#showSideMenu").on("click", function(){
            showSideMenu();
        });

        $("#switchMode").on("click", function(){
            let modeStatus = $("#modeStatus").attr("name");

            if(modeStatus == "light"){
                $("#lightCss").attr("media", "max-width=1px");
                $("#darkCss").attr("media", "");
                $("#modeStatus").attr("name", "dark");
                $("#modeStatus").text("Dark Mode");
                $("#lightModeIcon").addClass("hidden");
                $("#darkModeIcon").removeClass("hidden");
                // fadeEffect("#switchMode");
            } else if(modeStatus == "dark"){
                $("#lightCss").attr("media", "");
                $("#darkCss").attr("media", "max-width=1px");
                $("#modeStatus").attr("name", "light");
                $("#modeStatus").text("Light Mode");
                $("#darkModeIcon").addClass("hidden");
                $("#lightModeIcon").removeClass("hidden");
                // fadeEffect("#switchMode");
            } else {
                hideSideMenu();
            }

            // hideSideMenu();

        });

        $(".closeSM").on("click", function(){
            hideSideMenu();
        });

        // Music Player Here

        $("#goBackToHome").on("click", function(){
            try {
                showHome();
                pauseAudio();
                // $("#hideOnMusic").css(
                //     "opacity", "1"
                // );
                $("#hideOnMusic").removeClass("invisible");
                if(audioStatus == true){
                    handleAudio();
                }
            } catch (error) {
                
            }
        });

        $(".menu").css("z-index", "0");

        function topToBottom(){
            $(".menu").addClass("top-to-bottom-2");
            $(".menu").addClass("tob-white");
            $(".menu").delay(200).css("z-index", "0");

            /*
            $(".menu").delay(400).queue(function(next) {
                $(this).css("z-index", "0"); 
                next(); 
            });
            */

            $("#showSideMenu").addClass("hidden");
            $("#goBackToHome").removeClass("hidden");
            $("#songName").removeClass("invisible");
            uncheckHeart();
        }

        function bottomToTop(){
            $(".menu").removeClass("top-to-bottom-2");
            $(".menu").removeClass("tob-white");

            // $(".menu").delay(2000).css("z-index", "-1");

            /*
            $(".menu").delay(400).queue(function(next) {
                $(this).css("z-index", "-1"); 
                next(); 
            });
            */

            $("#showSideMenu").removeClass("hidden");
            $("#goBackToHome").addClass("hidden");
            $("#songName").addClass("invisible");
        }
