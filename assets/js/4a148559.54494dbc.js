"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40],{8352:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return d},default:function(){return p}});var i=t(7462),o=t(3366),a=(t(7294),t(3905)),r=["components"],l={id:"faq",title:"FAQ"},s=void 0,m={unversionedId:"guide/faq",id:"guide/faq",isDocsHomePage:!1,title:"FAQ",description:"Why can't I pass in name, value, error etc into my component?",source:"@site/docs/guide/faq.md",sourceDirName:"guide",slug:"/guide/faq",permalink:"/formik-material-ui/docs/guide/faq",editUrl:"https://github.com/stackworx/formik-material-ui/edit/master/docs/guide/faq.md",tags:[],version:"current",frontMatter:{id:"faq",title:"FAQ"},sidebar:"someSidebar",previous:{title:"Migrating",permalink:"/formik-material-ui/docs/guide/migrating"},next:{title:"Material-UI",permalink:"/formik-material-ui/docs/api/material-ui"}},d=[{value:"Why can&#39;t I pass in <code>name</code>, <code>value</code>, <code>error</code> etc into my component?",id:"why-cant-i-pass-in-name-value-error-etc-into-my-component",children:[]},{value:"Why does a wrapper for component x not exist?",id:"why-does-a-wrapper-for-component-x-not-exist",children:[]},{value:"Why does the field auto disable during submission?",id:"why-does-the-field-auto-disable-during-submission",children:[]}],u={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"why-cant-i-pass-in-name-value-error-etc-into-my-component"},"Why can't I pass in ",(0,a.kt)("inlineCode",{parentName:"h2"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"h2"},"value"),", ",(0,a.kt)("inlineCode",{parentName:"h2"},"error")," etc into my component?"),(0,a.kt)("p",null,"This is to prevent there being 2 sources of truth for value"),(0,a.kt)("p",null,"For Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function App() {\n  const [email, setEmail] = useState(\'\');\n  const [error, setError] = useState(null);\n\n  return (\n    <Field\n      component={TextField}\n      name="email"\n      type="email"\n      label="Email"\n      value={email}\n      error={error}\n      disabled={isSubmitting}\n    />\n  );\n}\n')),(0,a.kt)("p",null,"From this code is not at all obvious who is in control of the state. Therefore we purposefully hand over all control (",(0,a.kt)("inlineCode",{parentName:"p"},"name, value, onChange, onBlur"),") to formik. This ensures that there is no confusion."),(0,a.kt)("p",null,"But you can do this a custom field"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import TextField from '@mui/material/TextField';\nimport { Field } from 'formik';\nimport { fieldToTextField, TextFieldProps } from 'formik-material-ui';\n\nfunction UpperCasingTextField(props: TextFieldProps) {\n  const {\n    form: { setFieldValue },\n    field: { name },\n  } = props;\n  const onChange = React.useCallback(\n    (event) => {\n      const { value } = event.target;\n      setFieldValue(name, value ? value.toUpperCase() : '');\n    },\n    [setFieldValue, name]\n  );\n  return <TextField {...fieldToTextField(props)} onChange={onChange} />;\n}\n")),(0,a.kt)("h2",{id:"why-does-a-wrapper-for-component-x-not-exist"},"Why does a wrapper for component x not exist?"),(0,a.kt)("p",null,"Some components require many decisions to be made which would make then only work for some situations.\nA good example is the slider. Should the onChange event be fired while dragging or only when the thumb is dropped? This will depend on your use-case."),(0,a.kt)("h2",{id:"why-does-the-field-auto-disable-during-submission"},"Why does the field auto disable during submission?"),(0,a.kt)("p",null,"This is a convenience meant for the standard form. If this was omitted the isSubmitting property would have to be manually passed into every single field"),(0,a.kt)("p",null,"For Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{8}","{8}":!0},'<Formik>\n  {({ isSubmitting }) => (\n    <Form>\n      <TextField\n        name="email"\n        type="email"\n        label="Email"\n        disabled={isSubmitting}\n      />\n    </Form>\n  )}\n</Formik>\n')),(0,a.kt)("p",null,"A common scenario where this is problematic is where using Formik for search. Here we never want the field to be disabled. This can be accomplished by setting disabled to always be false"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{8}","{8}":!0},'<Formik>\n  {({ isSubmitting }) => (\n    <Form>\n      <TextField name="email" type="email" label="Email" disabled={false} />\n    </Form>\n  )}\n</Formik>\n')))}p.isMDXComponent=!0}}]);