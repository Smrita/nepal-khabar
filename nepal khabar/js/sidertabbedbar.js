/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



                        $(document).ready(function() {
                            $('#sideBarContent #sideNavBar ul a').click(function() {
                                $('#sideBarContent #sideNavBar ul a').removeClass('selected');
                                $(this).addClass('selected');
                                if ($(this).html() === "Politics")
                                {

                                    $('#content_changer').html("<p><a href='#'>Obama reelected</a></p><p><a href='#'>A cat died.</a></p><p><a href='#'> xyz is arrested</a></p><p><a href='#'> will constitution ever be written? </a></p>");

                                }
                                if ($(this).html() === "Economy")
                                {

                                    $('#content_changer').html("<p><a href='#'>O </a></p><p><a href='#'>A cat died.</a></p><p><a href='#'> xyz is arrested</a></p><p><a href='#'> will constitution ever be written? </a></p>");

                                }
                            });
                        });

                  