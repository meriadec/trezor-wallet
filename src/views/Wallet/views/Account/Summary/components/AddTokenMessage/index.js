/* @flow */
import styled from 'styled-components';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { H2 } from 'components/Heading';
import P from 'components/Paragraph';
import l10nMessages from './index.messages';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledSVG = styled.svg`
    margin-bottom: 24px;
`;

const StyledP = styled(P)`
    text-align: center;
`;

const AddTokenMessage = () => (
    <Wrapper>
        <StyledSVG width="84px" height="76px" viewBox="0 0 84 76">
            <defs>
                <linearGradient
                    x1="-18.9038234%"
                    y1="84.5976591%"
                    x2="72.6763662%"
                    y2="84.5976587%"
                    id="linearGradient-1"
                >
                    <stop stopColor="#FFFFFF" offset="0%" />
                    <stop stopColor="#E8E8E8" offset="71.3377225%" />
                    <stop stopColor="#F5F5F5" offset="75.783547%" />
                    <stop stopColor="#EDEEEE" offset="80.9337916%" />
                    <stop stopColor="#DDDDDD" offset="100%" />
                </linearGradient>
                <linearGradient
                    x1="50%"
                    y1="100%"
                    x2="50%"
                    y2="3.061617e-15%"
                    id="linearGradient-2"
                >
                    <stop stopColor="#FFFFFF" offset="0%" />
                    <stop stopColor="#EDEEEE" offset="100%" />
                </linearGradient>
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-809.000000, -631.000000)">
                    <g transform="translate(666.000000, 621.000000)">
                        <g transform="translate(124.000000, 0.000000)">
                            <g transform="translate(1.503106, 14.288000)">
                                <path
                                    d="M29.3432493,24.67154 L30.4877428,23.930798 C48.1550019,12.4961506 70.9320395,12.6710173 88.4216514,24.3755755 L88.4216514,24.3755755 C98.9174768,31.3996878 101.731856,45.6024036 94.707744,56.0982291 C92.9853876,58.6718711 90.7582333,60.8688627 88.1613463,62.5559675 L87.931677,62.7051755 C70.1069612,74.2852574 47.1352748,74.2852574 29.310559,62.7051755 L29.310559,62.7051755 C18.8137142,55.8857498 15.8325769,41.8481391 22.6520025,31.3512943 C24.3880423,28.6790839 26.6680586,26.4029836 29.3432493,24.67154 Z"
                                    fill="url(#linearGradient-1)"
                                />
                                <path
                                    d="M29.3432493,19.58354 L30.4877428,18.842798 C48.1550019,7.40815061 70.9320395,7.58301732 88.4216514,19.2875755 L88.4216514,19.2875755 C98.9174768,26.3116878 101.731856,40.5144036 94.707744,51.0102291 C92.9853876,53.5838711 90.7582333,55.7808627 88.1613463,57.4679675 L87.931677,57.6171755 C70.1069612,69.1972574 47.1352748,69.1972574 29.310559,57.6171755 L29.310559,57.6171755 C18.8137142,50.7977498 15.8325769,36.7601391 22.6520025,26.2632943 C24.3880423,23.5910839 26.6680586,21.3149836 29.3432493,19.58354 Z"
                                    fill="url(#linearGradient-2)"
                                />
                            </g>
                            <path
                                d="M33.1010133,31.43954 L34.2455068,30.698798 C51.9127658,19.2641506 74.6898035,19.4390173 92.1794154,31.1435755 L92.1794154,31.1435755 C102.675241,38.1676878 105.48962,52.3704036 98.4655079,62.8662291 C96.7431516,65.4398711 94.5159973,67.6368627 91.9191103,69.3239675 L91.689441,69.4731755 C73.8647252,81.0532574 50.8930388,81.0532574 33.068323,69.4731755 L33.068323,69.4731755 C22.5714782,62.6537498 19.5903409,48.6161391 26.4097665,38.1192943 C28.1458062,35.4470839 30.4258226,33.1709836 33.1010133,31.43954 Z"
                                fill="url(#linearGradient-1)"
                            />
                            <path
                                d="M33.1010133,26.35154 L34.2455068,25.610798 C51.9127658,14.1761506 74.6898035,14.3510173 92.1794154,26.0555755 L92.1794154,26.0555755 C102.675241,33.0796878 105.48962,47.2824036 98.4655079,57.7782291 C96.7431516,60.3518711 94.5159973,62.5488627 91.9191103,64.2359675 L91.689441,64.3851755 C73.8647252,75.9652574 50.8930388,75.9652574 33.068323,64.3851755 L33.068323,64.3851755 C22.5714782,57.5657498 19.5903409,43.5281391 26.4097665,33.0312943 C28.1458062,30.3590839 30.4258226,28.0829836 33.1010133,26.35154 Z"
                                fill="url(#linearGradient-2)"
                            />
                            <path
                                d="M29.3419428,23.9741105 L30.4993921,23.246185 C48.2414447,12.0881217 70.8509674,12.2596833 88.4216514,23.6857007 L88.4216514,23.6857007 C98.6204521,30.3178656 101.511782,43.962059 94.8796167,54.1608597 C93.1471985,56.8249352 90.8588695,59.0826297 88.1716882,60.778987 L87.931677,60.9305007 C70.0259762,72.2339685 47.2162599,72.2339685 29.310559,60.9305007 L29.310559,60.9305007 C19.1107943,54.4916177 16.0619972,41.0033287 22.5008802,30.8035639 C24.2425018,28.0446801 26.580105,25.7110438 29.3419428,23.9741105 Z"
                                fill="url(#linearGradient-1)"
                            />
                            <path
                                d="M29.3419428,19.0301105 L30.4993921,18.302185 C48.2414447,7.14412167 70.8509674,7.31568334 88.4216514,18.7417007 L88.4216514,18.7417007 C98.6204521,25.3738656 101.511782,39.018059 94.8796167,49.2168597 C93.1471985,51.8809352 90.8588695,54.1386297 88.1716882,55.834987 L87.931677,55.9865007 C70.0259762,67.2899685 47.2162599,67.2899685 29.310559,55.9865007 L29.310559,55.9865007 C19.1107943,49.5476177 16.0619972,36.0593287 22.5008802,25.8595639 C24.2425018,23.1006801 26.580105,20.7670438 29.3419428,19.0301105 Z"
                                fill="url(#linearGradient-2)"
                            />
                            <path
                                d="M69.433526,38.8605035 L71.8205777,40.4102846 L58.9250872,49.632 L48.3118496,46.3196007 L44.3416149,37.3553745 L55.5024522,29.8158252 L57.8906363,31.3663415 L59.5924676,30.4724924 C62.4591202,28.6206734 67.6621972,27.6455665 70.6940934,29.8158252 C73.7259896,31.9860839 73.3985706,35.3965218 71.1353574,37.4631297 L69.433526,38.8605035 Z M58.368154,45.668577 L65.4850281,40.1957044 L55.4475006,33.4418125 L48.6802624,38.2629225 L51.490976,43.7333515 L58.368154,45.668577 Z M62.5530685,32.3946474 L60.8512372,33.2884965 L66.7808283,37.0882024 L68.1747565,36.0444995 C69.5254594,35.3350729 70.23971,33.2884965 68.1747565,31.8911226 C66.1098029,30.4937488 63.9037715,31.6852207 62.5530685,32.3946474 Z"
                                fill="#DEDEDE"
                                opacity="0.800000012"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </StyledSVG>
        <H2>
            <FormattedMessage {...l10nMessages.TR_ADD_YOUR_TOKENS} />
        </H2>
        <StyledP isSmaller>
            <FormattedMessage {...l10nMessages.TR_SEARCH_FOR_THE_TOKEN} />
        </StyledP>
    </Wrapper>
);
export default AddTokenMessage;
