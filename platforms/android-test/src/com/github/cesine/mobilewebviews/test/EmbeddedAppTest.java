package com.github.cesine.mobilewebviews.test;

import junit.framework.Assert;

import com.github.cesine.mobilewebviews.EmbeddedApp;

import android.test.ActivityInstrumentationTestCase2;
import android.util.Log;

public class EmbeddedAppTest extends ActivityInstrumentationTestCase2<EmbeddedApp> {
	public EmbeddedApp mActivity;

	public EmbeddedAppTest(Class<EmbeddedApp> activityClass) {
		super(activityClass);
		Log.d("EmbeddedApp", "Created EmbeddedAppTest");
	}

	public EmbeddedAppTest() {
		super(EmbeddedApp.class);
		Log.d("EmbeddedApp", "Public EmbeddedAppTest");
	}

	@Override
	protected void runTest() throws Throwable {
		super.runTest();
		Log.d("EmbeddedApp", "Run test");
	}

	public void testPlaceholder() throws Throwable {
		Assert.assertNotNull(mActivity);

		boolean placeholder = true;
		Assert.assertTrue(placeholder);
	}

	public void testPopcorn() throws Throwable {
		Assert.assertNotNull(mActivity);
		mActivity.loadUrl("file:///android_asset/node_modules/popcorn/builds/popcorn/index.html");
		
		Assert.assertEquals(mActivity.backHistory(), true);
	}

	
	@Override
	protected void setUp() throws Exception {
		mActivity = this.getActivity();
		super.setUp();
		Log.d("EmbeddedApp", "Set up");
	}

	@Override
	protected void tearDown() throws Exception {
		super.tearDown();
		Log.d("EmbeddedApp", "Tear down");
	}

}
