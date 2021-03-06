# Final Project Report

**Online URL**: https://cmu-ids-2020.github.io/fp-classification_clarification/

**Project Repo**: https://github.com/CMU-IDS-2020/fp-classification_clarification

The goal of our project is to explain classification algorithms to readers without prior knowledge in machine learning. Our solution is to create an interactive “scrollytelling” narrative. Our narrative is centered around a case study where readers see whether education and age have an impact on income level. The narrative first introduces the dataset, allowing users to understand the basis of our models through exploratory data analysis. Next, we cover some of the inherent problems common to all machine learning problems, such as the concept of training data and overfitting. Finally, we introduce the three classification algorithms, K-Nearest Neighbors, Decision Trees, and Logistic Regression. In these sections, we include interactive visualizations that allow the user to see how changing the hyperparameters can affect the results of the model. We hope that by reading and interacting with the article, readers will understand at a high-level how these different classifications work, and that there are multiple ways to achieve similar outcomes with machine learning. 

## Introduction

The initial problem that we identified is that machine learning is intimidating for people with little academic experience. Our idea for addressing this issue was to make an easy to follow "scrollytelling" narrative application in Idyll, which allows us to combine simple text explanations with interactive data visualizations to aid the reader in learning. We envision the app to be used as a tool to teach classification algorithms and a foundation for further learning. Our intention is to make machine learning more approachable and inspire people about the powerful capabilities and possible applications in the modern world.

To keep the reader engaged throughout the app, we ask them to imagine a scenario in which they are at the crux of the decision to further their education or not. The case study walks the reader through how machine learning algorithms can help determine if additional years of education would affect their future income. We decided to use this case study because we (the authors) have asked ourselves the same question, and believe that our target audience will, or has, as well. Keeping engagement throughout the entire article is key for our application to be successful, so we decided to add a lot of interactive components in the form of interactive graphs or short quizzes, which will also help enforce, test, or further learning. 

## Related Work

When observing [“A visual introduction to machine learning”](http://www.r2d3.us/) by R2D3, we were heavily inspired by how scrollytelling for EDA immediately immersed the reader in their apartment dataset. Secondly, the creators use a continuous and consistent visual encoding as the reader descends down the page especially in regard to color. One of the slight drawbacks to the article that we were inspired to build upon was that the topic coverage and tone was quite complicated, which conflicts with the intended audience who would only read the article if they had limited ML expertise.

![](gifs/r2d3.gif)

The [Kernel Density Estimation](https://mathisonian.github.io/kde/) article is similar to our project as it seeks out to explain KDE to people that are unfamiliar with the concept. This paper achieves this by having small, scrollable text blocks that would explain a certain concept related to KDE. To help further learning, the visualization on the right would change depending on which section the reader is currently in. Our team was inspired by this idea and found that the changing visualizations based on the content of the text really reinforced the concepts that the article was attempting to teach. However, one issue that we ran into was that it wasn't always clear how to interact with some of the elements. To illustrate, in the GIF below, “Bandwidth” and “Amplitude” are sliders, but the underline makes it seem like they are text input fields. Thus, for our application, we made it a focus to create interactive elements that are intuitive to use to ensure that they will help the readers understand topics that we are trying to communicate. 

![](gifs/KDE.gif)

[Google's machine learning fairness article](https://www.thinkwithgoogle.com/feature/ml-fairness-for-marketers/#what-we-did) is a scrollytelling website that attempts to teach readers about algorithmic bias. It inspired us to create an educational narrative in combination with interactivity, and helped us to form the juxtaposition of scrolling text and visualizations.  An important part of the content of this article is the emphasis of training models with inclusive data to account for unbiased outcomes. While we did not get into too much detail about training and the pitfalls of overfitting, we briefly mentioned it to make the reader aware as they continue their learning.

![](gifs/Google.gif)

## Methods

The first challenge that our team faced was finding a dataset that would demonstrate a problem that the user can relate to and that machine learning could solve effectively. We believed we found this through our census data, which tackles the problem of whether income is predictable. While the dataset originally has 14 features, we decided to just keep only age and years of education to simplify the problem to how age and education can predict income. We did this so the dataset won’t overwhelm the reader and allow them to be fully focused on learning about machine learning. 

To immerse our reader in the case study, we started with interactive exploratory data analysis. We created simple bar charts in vega-lite that showed the spread for the two features in the data, age and years of education. The reader can select a button to filter by whether an individual is labeled as high income for each chart. Additionally, we show the two features in a scatterplot, colored by high income, to show that most individuals with high income are older and have more years of education. The purpose of this section is to prove that machine learning isn’t magic by using exploratory data analysis to show users how age and education can predict income, which is analogous to training a machine learning model.

Next, we ask the reader to guess whether a person is high or low income given identified age and years of education. This exercise mirrors testing the model, where, like the model, the reader has to use their judgment from past examples to classify new data. The first two questions are relatively straightforward, as both are on the extremes of the data. The last question is tougher for the reader, as the age and education years are not clearly on one side of the spectrum. This exercise demonstrates how classification algorithms can make human-centered predictions that can feel personal. Additionally, the last test also shows that machine learning can never be 100% accurate as there will always be cases where it will make predictions on test points, whose class seems ambiguous.

To show the KNN algorithm, we first show a simplified visualization example for ease of understanding. The user can select two different values of K to see how the classification changes, which is represented by the color of the circle. The subsequent visualization is based on the dataset with an interactive scroll bar to allow the user to select five values of K to see how the model classifies the last mystery person’s income level from the previous section. In terms of vega-lite code, this was performed by attaching a single selection to a slider binding. This selection was used to filter lines from a line graph and also used as input to conditions that control the color. We used lines to represent associations between the current test point and the K nearest neighbors.

![](gifs/knn.gif)

For decision trees, we provide our readers with two separate perspectives, which both demonstrate the effect of increasing the max depth on potential overfitting. For the first visualization, we created a tree diagram using D3 that displays how the tree structure grows as max depth increases. For the second visualization, we use filters on line graphs to display the effect of the max depth on the decision boundary itself, and we show it overfitting as the max depth increases.

To show logistic regression to someone who may not have a statistical background, we broke the concepts down for the reader to understand at a higher level how to perform logistic regression. We embedded desmos graphs to illustrate linear regression, and then after building up enough knowledge, proceeded to discuss sigmoid functions, logistic regression, and thresholds for classification. The user is able to interact with a scroll bar to see the impact of threshold probability on classification.

For the visualizations and introduction to the algorithm, we ran the different models on our training set of 32 data points. However, when discussing model selection, we chose to run the different algorithms on the full dataset (32,561 data points), and display the corresponding train and test accuracies. 

## Results

The narrative article shows many different smaller interactive visualizations in an effort to ease the digestion of information. This method is supported by educational psychologist Richard E. Mayer who affirms that, “People learn better when a complex continuous lesson is broken into separate segments. The learner’s working memory is less likely to be overloaded with essential processing when the essential material is presented in bite-size chunks rather than as a whole continuous lesson.” [3][3]

The sequence of bite-sized interactive exploratory data analysis and hyperparameter selections enables the reader to process each chunk of information, and use the knowledge from previous sections to build upon new information.

The conclusion of the article explains how models can be selected based on performance. We decided to perform the analysis outside of the article, as evaluating performance would probably come in a more advanced machine learning lesson. Ultimately, all three algorithms perform similarly, and there is no clear “winner”.

## Discussion

After reading and interacting with our article, the audience can build a basic skill set that will enable them to identify simple heuristics to predict outcomes from data. In our case study, this is the classification of high or low income.

Additionally, the audience will gain the understanding that there are multiple ways to achieve similar outcomes with machine learning. In this case, the three different algorithms were used on the same dataset, and performed similarly. A really important takeaway for our readers is the confidence that it is possible to gain a high-level intuition for previously bewildering ML algorithms.

## Future Work

One challenge that our team faced when developing this application was learning both Idyll and D3 (including javascript, HTML and CSS) from scratch. Because we prioritized learning Idyll to ensure that we would have an application that feels like scrollytelling, we did not have time to learn and incorporate D3 components into our application. Thus, one big way that our application can be extended or refined in the future is to incorporate D3 elements to add animation and more interactivity into our application. We believe that this would only help further engagement, which would also lead to the reader learning more from our application. An example of this could be showing how test data points represented by circles trickle down the tree as the data is split at each node.

Additionally, our application has mostly the same layout for all its content. While this does not hinder the success of our application, future work can be to mix up how content and visualizations are laid out to draw the reader’s focus to one specific area. To illustrate, because we believed that the user would learn most about KNN by playing with an interactive visualization showing how K can alter what the algorithm predicts, it would be nice to have a large scrollytelling section devoted to that one visualization. Ultimately, mixing up the style of our application as the reader progresses would help engagement by keeping things look new, which would pique the interest of the reader. Additionally, large visualization sections can act as a break from all the reading, which will only help the user absorb information better. 

References
 1. Dataset: https://www.kaggle.com/uciml/adult-census-income 
 2. https://books.google.com/booksid=vLiTXDHr_sYC&lpg=PA3&ots=CZkyzsZChi&dq=machine%20learning%20classification&lr&pg=PA4#v=onepage&q=machine%20learning%20classification&f=false
 3. https://towardsdatascience.com/machine-learning/home
 4. https://time.com/2829631/is-it-better-to-learn-something-in-small-frequent-chunks-of-information/
