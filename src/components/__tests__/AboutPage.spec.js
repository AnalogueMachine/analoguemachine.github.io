import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from '../AboutPage';

describe('About Page', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AboutPage/>);
    });

    it('should exist', () => {
        expect(wrapper).not.toBe(undefined);
    });

    describe('componentDidMount', () => {
        it('should return the page to the top', () => {
            window.scrollTo = jest.fn();
            wrapper.instance().componentDidMount();
            expect(window.scrollTo).toBeCalledWith(0,0);
        });
    });

    describe('render', () => {
        it('should contain a container div at top level', () => {
            const innerDiv = wrapper.getElement();
    
            expect(innerDiv.type).toBe('div');
            expect(innerDiv.props.className).toBe('container');
        });
    
        describe('Intro section', () => {
            let introSection;
    
            beforeEach(() => {
                introSection = wrapper.find('#introsection');
            });
    
            it('should exist', () => {
                expect(introSection).not.toBe(undefined);
                expect(introSection.exists()).toBeTruthy();
            });
    
            it('should be a row', () => {
                expect(introSection.props().className).toBe('row');
            });
    
            it('should contain a centred div for the text', () => {
                expect(introSection.props().children.type).toBe('div');
                expect(introSection.props().children.props.className).toBe('col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm');
            });
    
            describe('Intro text', () => {
                let introTextDiv;
    
                beforeEach(() => {
                    introTextDiv = introSection.props().children;
                });
    
                it('should contain a centred heading with appropriate text', () => {
                    const headingElement = introTextDiv.props.children[0];
                    
                    expect(headingElement.type).toBe('h1');
                    expect(headingElement.props.children).toBe('Hi');
                    expect(headingElement.props.className).toBe('centredtext');
                });
    
                it('should contain a first paragraph with appropriate text', () => {
                    const firstParagraphElement = introTextDiv.props.children[1];
    
                    expect(firstParagraphElement.type).toBe('p');
                    expect(firstParagraphElement.props.children).toEqual(
                        'I am a software developer working in Belfast. ' + 
                        'I recently (2018) graduated from the MSc Software Development course ' + 
                        'at Queen\'s University Belfast with distinction. ' + 
                        'My interests are full-stack web development, IoT and public engagement.'
                    );
                });
    
                it('should contain a second paragraph with appropriate text', () => {
                    const secondParagraphElement = introTextDiv.props.children[2];
    
                    expect(secondParagraphElement.type).toBe('p');
                    expect(secondParagraphElement.props.children).toEqual(
                       'Before software development, I worked for many years in science ' + 
                       'communication - developing and presenting science shows and workshops ' + 
                       'for audiences of all ages and sizes across Ireland, as well as co-ordination of some larger events.'
                    );
                });
    
                it('should contain a third paragraph with appropriate text', () => {
                    const thirdParagraphElement = introTextDiv.props.children[3];
    
                    expect(thirdParagraphElement.type).toBe('p');
                    expect(thirdParagraphElement.props.children).toEqual(
                        'Please do drop me a line on my Twitter or Github pages to get in touch. ' +
                        'I am still learning so any feedback on this site is very welcome.'
                    );
                });
            });
        });
    
        describe('Education section', () => {
            let educationSection;
    
            beforeEach(() => {
                educationSection = wrapper.find('#educationsection');
            });
    
            it('should exist', () => {
                expect(educationSection).not.toBe(undefined);
                expect(educationSection.exists()).toBeTruthy();
            });
    
            it('should be a row', () => {
                expect(educationSection.props().className).toBe('row');
            });
    
            it('should contain a centred div for the text', () => {
                expect(educationSection.props().children.type).toBe('div');
                expect(educationSection.props().children.props.className).toBe('col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm');
            });
    
            describe('Education section content', () => {
                let educationTextDiv;
    
                beforeEach(() => {
                    educationTextDiv = educationSection.props().children;
                });
    
                it('should contain a title heading with appropriate text', () => {
                    const headingElement = educationTextDiv.props.children[0];
                    
                    expect(headingElement.type).toBe('h3');
                    expect(headingElement.props.children).toBe('Education');
                });
    
                it('should contain a subtitle heading with QUB text', () => {
                    const subtitleElement = educationTextDiv.props.children[1];
                    
                    expect(subtitleElement.type).toBe('h4');
                    expect(subtitleElement.props.children).toBe('Queen\'s University Belfast');
                });
    
                it('should contain an unordered list of qualifications', () => {
                    const qualificationsList = wrapper.find('#degreelist');
    
                    expect(qualificationsList.exists()).toBeTruthy();
                    expect(qualificationsList.getElement().type).toBe('ul');
                    expect(qualificationsList.props().children.length).toBe(3);
                    expect(qualificationsList.contains(<li>MSc Software Development (Distinction)</li>)).toBe(true);
                    expect(qualificationsList.contains(<li>MA Sonic Arts (Distinction)</li>)).toBe(true);
                    expect(qualificationsList.contains(<li>BSc Music Technology (First Class Honours)</li>)).toBe(true);           
                });
            });
        });
    
        describe('Work History section', () => {
            let workHistorySection;
    
            beforeEach(() => {
                workHistorySection = wrapper.find('#workhistorysection');
            });
    
            it('should exist', () => {
                expect(workHistorySection).not.toBe(undefined);
                expect(workHistorySection.exists()).toBeTruthy();
            });
    
            it('should be a row', () => {
                expect(workHistorySection.props().className).toBe('row');
            });
    
            it('should contain a centred div for the text', () => {
                expect(workHistorySection.props().children.type).toBe('div');
                expect(workHistorySection.props().children.props.className).toBe('col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm');
            });
    
            describe('Work History section content', () => {
                let workHistoryContentDiv;
    
                beforeEach(() => {
                    workHistoryContentDiv = workHistorySection.props().children;
                });
    
                it('should contain a title heading with appropriate text', () => {
                    const headingElement = workHistoryContentDiv.props.children[0];
                    
                    expect(headingElement.type).toBe('h3');
                    expect(headingElement.props.children).toBe('Work History');
                });
    
                it('should contain an unordered list of past jobs', () => {
                    const workList = wrapper.find('#worklist');
    
                    expect(workList.exists()).toBeTruthy();
                    expect(workList.getElement().type).toBe('ul');
                    expect(workList.props().children.length).toBe(2);
                    expect(workList.contains(
                        <li>
                            <b>Present</b> Allstate Northern Ireland - Applications Developer (CompoZed)
                        </li>)
                    ).toBe(true);
                    expect(workList.contains(
                        <li>
                            <b>Past</b> Science Communicator
                        </li>
                    )).toBe(true);
                });
            });
        });
    
        describe('Skills section', () => {
            let skillsSection;
    
            beforeEach(() => {
                skillsSection = wrapper.find('#skillssection');
            });
    
            it('should exist', () => {
                expect(skillsSection).not.toBe(undefined);
                expect(skillsSection.exists()).toBeTruthy();
            });
    
            it('should be a row', () => {
                expect(skillsSection.props().className).toBe('row');
            });
    
            it('should contain a centred div for the text', () => {
                expect(skillsSection.props().children.type).toBe('div');
                expect(skillsSection.props().children.props.className).toBe('col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm');
            });
    
            describe('Skillset section content', () => {
                let skillsContentDiv;
    
                beforeEach(() => {
                    skillsContentDiv = skillsSection.props().children;
                });
    
                it('should contain a title heading with appropriate text', () => {
                    const headingElement = skillsContentDiv.props.children[0];
                    
                    expect(headingElement.type).toBe('h3');
                    expect(headingElement.props.children).toBe('Skillset');
                });
    
                it('should contain an unordered list of skills', () => {
                    const workList = wrapper.find('#skillslist');
    
                    expect(workList.exists()).toBeTruthy();
                    expect(workList.getElement().type).toBe('ul');
                    expect(workList.props().children.length).toBe(7);
                    expect(workList.contains(<li>XP, TDD, Agile, CI/CD</li>)).toBe(true);
                    expect(workList.contains(<li>React / Redux</li>)).toBe(true);
                    expect(workList.contains(<li>Spring Boot</li>)).toBe(true);
                    expect(workList.contains(<li>Git / Jenkins</li>)).toBe(true);
                    expect(workList.contains(<li>HTML / CSS / JS</li>)).toBe(true);
                    expect(workList.contains(<li>Java / SQL / RDBMS during the MSc</li>)).toBe(true);
                    expect(workList.contains(<li>Public engagement</li>)).toBe(true);
                });
            });
        });
    });
});