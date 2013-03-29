  $(document).ready(function() {
	                         
                            $('#sideBarContent #sideNavBar ul a').click(function() {
                                $('#sideBarContent #sideNavBar ul a').removeClass('selected');
                                $(this).addClass('selected');
                                if ($(this).html() === "Politics")
                                {

                                    $('#content_changer').html("<ul><li><a href='NelsonMandelaHealth.html'>Nelson Mandela health: Zuma reassures South Africa  </li><li><a href='opinionBarakObma.html'> Obama signs executive order to create commission</a></li><li><a href='politicsKimJon.html'>What's Kim Jong Un up to?</a></li> </ul>");

                                }
                                if ($(this).html() === "Economy")
                                {

                                     $('#content_changer').html("<ul><li><a href='#' > Finnish Prime Minister Jyrki Katainen about European economy </a></li><li><a href='#'> Japan jobless rate up</a></li><li><a href='#'> Cyprus looks to its past for economic reboot </a></li><li><a href='#'> Asia stocks modestly higher after S&P hits record </a></li></ul>");

                                }
                                if ($(this).html() === "Sports")
                                {
                                    
                                    $('#content_changer').html("<ul><li><a href='SportNepaliCricket.html'>Hong Kong expose Nepal's poor batting </a></li><li><a href='#'>India won match </a></li><li><a href='#'>Golf: McIlroy blames stupid mistakes</a></li><li><a href='#'>Tennis: Murray closes on No. 2 spot</a></li><li><a href='#'>Tennis: Sharapova's Miami dream</a></li></ul>");

                                }
                                if ($(this).html() === "Tech")
                                {

                                    $('#content_changer').html("<ul><li><a href='techGoogle.html'>Google and Ogooglebar: Who owns the meaning of words?</a></li><li><a href='#' >Mark ZukerBerg faces $ billion tax bill\n\
</a></li><li><a href='#' >Google glass is launched</a></li><li><a href='#' >Apple sues Samsung </a></li>");

                                }
                            });
                        });

                  