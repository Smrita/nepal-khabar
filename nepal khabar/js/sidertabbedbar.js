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

                                    $('#content_changer').html("<p><a href='NelsonMandelaHealth.html'>Nelson Mandela health: Zuma reassures South Africa</a></p>\
                                        <p><a href='politicsKimJon>What's Kim Jong Un up to?</a></p><p><a href='opinionBarakObma.html'> Obama signs executive order \n\
                                            to create commission</a></p><p><a href='politicsKimjon.html'> What's Kim Jong Un up to? </a></p>");

                                }
                                if ($(this).html() === "Economy")
                                {

                                    $('#content_changer').html("<p><a href='#'> Finnish Prime Minister Jyrki Katainen about European economy </a></p>");

                                }
                                if ($(this).html() === "Sports")
                                {

                                    $('#content_changer').html("<p><a href='SportNepaliCricket.html'>Hong Kong expose Nepal’s poor batting </a></p><p><a href='#'>India won match </a></p>");

                                }
                                if ($(this).html() === "Tech")
                                {

                                    $('#content_changer').html("<p><a href='techGoogle.html'>Google and Ogooglebar: Who owns the meaning of words?</a></p>");

                                }
                            });
                        });

                  